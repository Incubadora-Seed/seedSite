import { FastifyInstance } from 'fastify';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);

interface RouteParams {
    filename: string;
}

export async function downloadRoutes(server: FastifyInstance) {
    server.get('/download', async (request, reply) => {
        try {
            const pdfDirectory = path.join(__dirname, '..', 'uploads');
            const files = await readdir(pdfDirectory);

            const pdfFiles = files.filter(file => file.endsWith('.pdf'));   
            
            reply.send({ pdfFiles });
        } catch (error) {
            console.error('Error during download:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });

    server.get('/download/:filename', async (request, reply) => {
        try {
            const params = request.params as RouteParams;
            const filename = params.filename;
            const filePath = path.join(__dirname, '..', 'uploads', filename);

            const fileExists = fs.existsSync(filePath);
            if (!fileExists) {
                return reply.status(404).send({ error: 'File not found' });
            }

            reply.header('Content-Disposition', `inline; filename="${filename}"`);
            reply.type('application/pdf');

            const fileContent = await fs.promises.readFile(filePath);
            reply.send(fileContent);
        } catch (error) {
            console.error('Error during download:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });
    
    
}
