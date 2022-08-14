import type { AppConfig } from '.'

const config: AppConfig = {
  port: 3000,
  api: {
    user: {
      url: 'https://dev.example.com',
      athenzProviderDomain: 'example.api.dev',
      athenzProviderRole: 'user',
    },
  },
}

export default config
