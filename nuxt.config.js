const pkg = require('./package')
const setting = require('./plugins/setting')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '飞奔 | 飞奔的博客 ， 前端develop，技术分享，不止前端，Not only front-end!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '飞奔的博客是用来发表前端以及其他技术的文章，微信公众号 前端develop，技术分享，Not only front-end!' },
      { hid: 'keywords', name: 'keywords', content: '飞奔,飞奔的博客,前端develop,技术分享,不止前端,feiben,blog,feiben\’s blog,Not only front-end!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409EFF' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    { src: '@/assets/styles/index.less', lang: 'less' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   '@/plugins/element-ui'
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  // },

  ...setting,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
