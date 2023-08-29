import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Pool } from 'pg';

interface LoginRequestBody {
    username: string;
    password: string;
}

export async function loginRoutes(server: FastifyInstance) {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        port: Number(process.env.DB_PORT)
    });

    server.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {
        const { username, password } = request.body as LoginRequestBody;

        try {
            const client = await pool.connect();
            const result = await client.query(
                'SELECT * FROM users WHERE username = $1 AND password = $2',
                [username, password]
            );

            client.release();

            if (result.rowCount === 1) {
                return { success: true, message: 'Login successful' };
            } else {
                return { success: false, message: 'Invalid credentials' };
            }
        } catch (error) {
            console.error('Error during login:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });
}