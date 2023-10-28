import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { Pool } from 'pg';

let pool: Pool;
try {
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASS,
        port: Number(process.env.DB_PORT),
    });
} catch (error) {
    console.error('Error creating pool:', error);
}

export async function companyRoutes(server: FastifyInstance) {

    server.get('/company', async () => {
        const query = 'SELECT * FROM empresas';
        const { rows } = await pool.query(query);
        return rows;
    });

    server.get('/company/:cnpj/:email/:telefone/:categoria/:nome_fantasia', async (request, reply) => {
        try {
            // Valide os parâmetros recebidos
            const paramsSchema = z.object({
                cnpj: z.string(),
                email: z.string(), 
                telefone: z.string(), 
                categoria: z.string(), 
                nome_fantasia: z.string()
            });
            const { cnpj, nome_fantasia, categoria, telefone, email } = paramsSchema.parse(request.params);
    
            // Construa a query SQL
            const query = 'SELECT * FROM company WHERE nome_fantasia LIKE $1 OR cnpj LIKE $2 OR telefone LIKE $3 OR categoria LIKE $4 OR email LIKE $5';
    
            // Execute a query no banco de dados
            const { rows, rowCount } = await pool.query(query, [`%${nome_fantasia}%`, `%${cnpj}%`, `%${telefone}%`, `%${categoria}%`, `%${email}%`]);
    
            // Verifique se há resultados
            if (rowCount === 0) {
                return reply.status(404).send('Empresa não encontrada');
            }
    
            // Retorne os resultados (ou faça o que for apropriado)
            return rows; // Isso irá retornar os dados das empresas encontradas
        } catch (error) {
            console.error('Erro:', error);
            return reply.status(500).send('Erro interno do servidor');
        }
    });

    server.get('/company/:cnpj', async (request, reply) => {
        const paramsSchema = z.object({
            cnpj: z.string(),
        });

        const { cnpj } = paramsSchema.parse(request.params);

        const query = 'SELECT * FROM empresas WHERE cnpj = $1';
        const { rows } = await pool.query(query, [cnpj]);

        if (rows.length === 0) {
            return reply.status(404).send('Empresa não encontrada');
        }

        return rows[0];
    });

    server.post('/company', async (request, reply) => {
        const bodySchema = z.object({
            id: z.string(),
            nome_fantasia: z.string(),
            razao_social: z.string(),
            cnpj: z.string(),
        });
    
        const { id, nome_fantasia, razao_social, cnpj } = bodySchema.parse(request.body);
    
        const query = 'INSERT INTO empresas (id, nome_fantasia, razao_social, cnpj) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [id, nome_fantasia, razao_social, cnpj];
    
        try {
            const { rows } = await pool.query(query, values);
            reply.status(200).send('Empresa cadastrada com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar empresa:', error);
            reply.status(500).send('Erro ao cadastrar empresa.');
        }
    });
    
    server.put('/company/:cnpj', async (request, reply) => {

        const paramsSchema = z.object({
            cnpj: z.string(),
        });

        const { cnpj } = paramsSchema.parse(request.params);

        const bodySchema = z.object({
            nome_fantasia: z.string(),
            razao_social: z.string(),
            cnpj: z.string(),
        });

        const { nome_fantasia, razao_social } = bodySchema.parse(request.body);

        const query = 'UPDATE empresas SET nome_fantasia = $1, razao_social = $2 WHERE cnpj = $3 RETURNING *';
        const values = [nome_fantasia, razao_social, cnpj];
        const { rows } = await pool.query(query, values);

        if (rows.length === 0) {
            return reply.status(404).send();
        }

        return rows[0];
    });

    server.delete('/company/:cnpj', async (request, reply) => {
        const paramsSchema = z.object({
            cnpj: z.string(),
        });

        const { cnpj } = paramsSchema.parse(request.params);

        const query = 'DELETE FROM empresas WHERE cnpj = $1';
        const { rowCount } = await pool.query(query, [cnpj]);

        if (rowCount === 0) {
            return reply.status(404).send('Empresa não encontrada');
        }

        return 'Empresa deletada';
    });
    
}