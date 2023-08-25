import 'dotenv/config'
import fastify from 'fastify'
import { userRoutes } from './routes/users';

const server = fastify()

server.register(userRoutes)

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })