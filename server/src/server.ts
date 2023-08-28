import 'dotenv/config'
import fastify from 'fastify'
import { companyRoutes } from './routes/company';

const server = fastify()

server.register(companyRoutes)

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })