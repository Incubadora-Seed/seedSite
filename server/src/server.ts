import 'dotenv/config'
import fastify from 'fastify'
import { companyRoutes } from './routes/company';
import { loginRoutes } from './routes/login';
import { uploadRoutes } from './routes/upload';

const server = fastify()

server.register(companyRoutes)
server.register(loginRoutes)
server.register(uploadRoutes)

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })