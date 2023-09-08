import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { companyRoutes } from './routes/company';
import { loginRoutes } from './routes/login';
import { uploadRoutes } from './routes/upload';
import { downloadRoutes } from './routes/download';
import { resolve } from 'path';
import fastifyMultipart from '@fastify/multipart';

export const server = fastify()

server.register(fastifyMultipart)
server.register(companyRoutes)
server.register(loginRoutes)
server.register(uploadRoutes)
server.register(downloadRoutes)
server.register(require('@fastify/static'), {
  root: resolve(__dirname, '..', 'uploads'),
  prefix: '/uploads',
})


server.register(cors, {
  origin: true,
})

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on port http://localhost:3333')
  })