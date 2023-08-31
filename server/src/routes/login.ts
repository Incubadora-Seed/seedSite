import { FastifyInstance } from 'fastify';

interface LoginRequestBody {
    username: string;
    password: string;
}

export async function loginRoutes(server: FastifyInstance) {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    server.post('/login', async (request, reply) => {
        const { username, password }: LoginRequestBody = request.body as LoginRequestBody;

        console.log("teste");
    
        if (username === adminUsername && password === adminPassword) {
            // Implemente a geração de um token JWT aqui
            // Envie o token para o cliente
            reply.status(200).send({ message: 'Login successful' });
        } else {
            reply.status(401).send({ message: 'Invalid credentials' });
        }
    });
}
