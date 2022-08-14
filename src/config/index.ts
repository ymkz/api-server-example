export type AppConfig = {
  port: number
  api: {
    user: {
      url: string
      athenzProviderDomain: string
      athenzProviderRole: string
    }
  }
}

export const loadConfig = async (
  appEnv: typeof process.env.APP_ENV = 'development'
) => {
  const imported = await import(`./${appEnv}.config`)
  const config: Readonly<AppConfig> = imported.default
  return config
}
