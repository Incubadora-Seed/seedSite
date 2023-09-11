import { FastifyInstance } from 'fastify';
import path from 'path';
import fs from 'fs';

interface RouteParams {
    filename: string;
}

export async function downloadRoutes(server: FastifyInstance) {
    server.get('/download', async (request, reply) => {
        try {
            const pdfDirectory = path.join(__dirname, '..', 'uploads');
            fs.readdir(pdfDirectory, (err, files) => {
                if (err) {
                    console.error(err);
                    return reply.status(500).send({ error: 'Erro ao ler os arquivos PDF' });
                }

                const pdfFiles = files.filter(file => file.endsWith('.pdf'));
                reply.send({ pdfFiles });
            });
        } catch (error) {
            console.error('Error during download:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });
}
