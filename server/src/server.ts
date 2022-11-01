import Fastify from 'fastify'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  // http://localhost:3333/polls/
  
  fastify.get('/pools/count', () => {
    return { count: 123123123 }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()
