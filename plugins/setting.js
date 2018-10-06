const setting = {
  dev: {
    axios: {
      prefix: '/api/',
      proxy: true
    },
    proxy: {
      '/api/': { target: 'http://feiben.xyz/api', pathRewrite: {'^/api/': ''} }
    },
    plugins: [
      '@/plugins/element-ui',
      '@/plugins/axios',
      '@/plugins/config'
    ]
  },
  build: {
    axios: {
      baseURL: 'feiben.xyz/api/'
    },
    plugins: [
      '@/plugins/element-ui',
      '@/plugins/logger',
      '@/plugins/axios',
      '@/plugins/config'
    ]
  }
}

module.exports = process.env.NODE_ENV == 'production' ? setting.build : setting.dev
