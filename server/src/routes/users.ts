import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function userRoutes(server: FastifyInstance) {
    server.addHook('preHandler', async (request) => {
        await request.jwtVerify();
    });

    server.get('/users', async () => {
        const users = await prisma.user.findMany();
        return users;
    });

    server.get('/users/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        });

        const { id } = paramsSchema.parse(request.params);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            return reply.status(404).send();
        }

        return user;
    });

    server.post('/users', async (request) => {
        const bodySchema = z.object({
            name: z.string(),
            login: z.string(),
            avatarUrl: z.string().url(),
            cnpj: z.string(),
        });

        const { name, login, avatarUrl, cnpj } = bodySchema.parse(request.body);

        const user = await prisma.user.create({
            data: {
                name,
                login,
                avatarUrl,
                cnpj,
            },
        });

        return user;
    });

    server.put('/users/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        });

        const { id } = paramsSchema.parse(request.params);

        const bodySchema = z.object({
            name: z.string(),
            login: z.string(),
            avatarUrl: z.string().url(),
            cnpj: z.string(),
        });

        const { name, login, avatarUrl, cnpj } = bodySchema.parse(request.body);

        let user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            return reply.status(404).send();
        }

        user = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                login,
                avatarUrl,
                cnpj,
            },
        });

        return user;
    });

    server.delete('/users/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        });

        const { id } = paramsSchema.parse(request.params);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            return reply.status(404).send();
        }

        await prisma.user.delete({
            where: {
                id,
            },
        });

        return 'User deleted';
    });
}
