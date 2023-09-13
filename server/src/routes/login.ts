import { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
require('dotenv').config();

interface LoginRequestBody {
    username: string;
    password: string;
}

export async function loginRoutes(server: FastifyInstance) {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    server.post('/login', async (request, reply) => {
        const { username, password }: LoginRequestBody = request.body as LoginRequestBody;
        const jwtSecret = process.env.JWT_SECRET!; // ! ensures that jwt secret is not null

        if (username === adminUsername && password === adminPassword) {
            const payload = {
                username, 
                password,
                isAdmin: true,
            };

            const token = jwt.sign(payload, jwtSecret, { expiresIn: '4h' });

            reply.status(200).send({ message: 'Login successful', token });
        } else {
            reply.status(401).send({ message: 'Invalid credentials' });
        }
    });
}
