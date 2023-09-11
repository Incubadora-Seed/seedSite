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

        if (username === adminUsername && password === adminPassword) {
            reply.status(200).send({ message: 'Login successful' });
        } else {
            reply.status(401).send({ message: 'Invalid credentials' });
        }
    });
}