import { loadConfig } from './config'

const bootstrap = async () => {
  const config = await loadConfig(process.env.APP_ENV)
  console.log(config)
}

bootstrap()
