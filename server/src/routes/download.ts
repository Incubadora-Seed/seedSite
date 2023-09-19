import { FastifyInstance } from 'fastify';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);

interface RouteParams {
    year: any;
    filename: string;
}

export async function downloadRoutes(server: FastifyInstance) {

    server.get('/download/:year', async (request, reply) => {
        try {
            const params = request.params as RouteParams;
            const year = params.year;
            const uploadsDirectory = path.join(__dirname, '..', 'uploads', year);

            const files = await readdir(uploadsDirectory);

            const pdfFiles = files.filter(file => file.endsWith('.pdf'));

            reply.send({ pdfFiles });
        } catch (error) {
            console.error('Error listing files:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });

    server.get('/download/:year/:filename', async (request, reply) => {
        try {
            const params = request.params as RouteParams;
            const year = params.year;
            const filename = params.filename;
            const filePath = path.join(__dirname, '..', 'uploads', year, filename);

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
    
    server.get('/folders', async (request, reply) => {
        try {
            const uploadsDirectory = path.join(__dirname, '..', 'uploads');
            const folders = await readdir(uploadsDirectory, { withFileTypes: true });

            const folderNames = folders
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);

            reply.send({ folders: folderNames });
        } catch (error) {
            console.error('Error listing folders:', error);
            return reply.status(500).send({ error: 'Internal server error' });
        }
    });
    
}
