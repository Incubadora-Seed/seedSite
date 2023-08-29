import { FastifyInstance } from 'fastify';
import path from 'path';
import fs from 'fs';

interface RouteParams {
    filename: string;
}

export async function downloadRoutes(server: FastifyInstance) {
    server.get('/download/:filename', async (request, reply) => {
        try {
            const params = request.params as RouteParams;
            const filename = params.filename;
            const filePath = path.join(__dirname, '..', 'uploads', filename);

            const fileExists = fs.existsSync(filePath);
            if (!fileExists) {
                return reply.status(404).send({ error: 'File not found' });
            }

            reply.header('Content-Disposition', `attachment; filename="${filename}"`);
            reply.type('application/pdf');

            const fileStream = fs.createReadStream(filePath);
            reply.send(fileStream); // Usando o método send para enviar o arquivo
        } catch (error) {
            console.error('Error during download:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });
}