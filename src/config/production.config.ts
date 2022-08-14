import type { AppConfig } from '.'

const config: AppConfig = {
  port: 3000,
  api: {
    user: {
      url: 'https://prod.example.com',
      athenzProviderDomain: 'example.api.prod',
      athenzProviderRole: 'user',
    },
  },
}

export default config
