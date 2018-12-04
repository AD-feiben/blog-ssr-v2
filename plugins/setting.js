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
      '@/plugins/config',
      {src: '@/plugins/lazyload', ssr: true}
    ]
  },
  build: {
    axios: {
      baseURL: '/api/'
    },
    plugins: [
      '@/plugins/element-ui',
      '@/plugins/logger',
      '@/plugins/axios',
      '@/plugins/config',
      {src: '@/plugins/lazyload', ssr: true}
    ]
  }
}

module.exports = process.env.NODE_ENV == 'production' ? setting.build : setting.dev
