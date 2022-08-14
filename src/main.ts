import fastify from 'fastify'
import { loadConfig } from './config'

const bootstrap = async () => {
  const app = fastify()
  const config = await loadConfig(process.env.APP_ENV)

  app.get('/healthz', (_request, _reply) => {
    return { status: 'UP' }
  })

  app.get('/user', (_request, _reply) => {
    console.log(config.api.user)
    return { user: 'john doe' }
  })

  app.listen({ port: config.port }, (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(`Ready on http://localhost:${config.port}`)
  })
}

bootstrap()
