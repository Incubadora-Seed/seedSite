import { resolve } from 'node:path';
import { FastifyInstance } from 'fastify';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const pump = promisify(pipeline)

export async function uploadRoutes(server: FastifyInstance) {
  server.post('/upload', async (request, reply) => {
    const upload = await request.file();
    console.log(upload);
    

    if (!upload) {
      return reply.status(400).send();
    }

    if (upload.mimetype != 'application/pdf') {
      return reply.status(400).send();
    }

    const fileName = upload.filename;

    const writeStream = createWriteStream(
      resolve(__dirname, '..', 'uploads', fileName),
    );

    try {
      await pump(upload.file, writeStream);
      const fullUrl = request.protocol.concat('://').concat(request.hostname);
      const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString();

      return { fileUrl };
    } catch (error) {
      console.error('Error uploading file:', error);
      return reply.status(500).send('Error uploading file');
    }
})
}
