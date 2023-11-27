import { FastifyInstance } from 'fastify';
import * as cookie from 'cookie';
import * as jwt from 'jsonwebtoken';
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

        if (username === adminUsername && password === adminPassword) {
            if (process.env.JWT_SECRET) {
                const token = jwt.sign({ username }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });

                const cookieHeader = cookie.serialize('token', token, {
                    maxAge: 60 * 60, // 1 hour
                    path: '/',
                    sameSite: true,
                });

                reply.header('Set-Cookie', cookieHeader).send({ token });
            } else {
                reply.status(500).send({ message: 'Internal server error' });
            }
        }
    });
}
