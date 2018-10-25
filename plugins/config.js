import Vue from 'vue'

// CNZZ Baidu标记 Google标记请在 app.html 中设置

const config = {
  author: '飞奔',
  logo: 'https://upload-images.jianshu.io/upload_images/1917079-b62f4dfd279c5523.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
  header: {
    description: 'If you\'re going to try, go all the way!',
  },
  footer: {
    since: 2015,
    friLinks: [
      { name: '飞奔·Blog', title: 'Blog', url: 'http://feiben.xyz' },
      { name: '飞奔·GitHub', title: 'GitHub', url: 'http://github.com/ad-feiben' },
      { name: '飞奔·掘金', title: '掘金', url: 'https://juejin.im/user/58d3ab5b128fe1006cb236e1' },
      { name: '飞奔·简书', title: '简书', url: 'https://www.jianshu.com/u/ccb05861b473' },
      { name: 'Blog·V1', title: 'Blog', url: 'http://feiben.xyz/v1/' },
      { name: 'Bitbank Wallet', title: 'Bitbank Wallet', url: 'http://feiben.xyz/bitbankwallet/' },
    ],
  },
  social: {
    // wechat 为 二维码图片地址
    wechat: 'https://upload.jianshu.io/users/qrcodes/1917079/%E5%85%AC%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png?imageMogr2/auto-orient/strip|imageView2/1/w/320/h/320',
    github: 'https://github.com/AD-feiben',
    weibo: '',
    jianshu: 'https://www.jianshu.com/u/ccb05861b473'
  },
  feedback: {
    email: 'feiben.dev@gmail.com',
    githubIssues: 'https://github.com/AD-feiben/blog-ssr-v2/issues'
  },
  seo: {
    title: '飞奔 | 飞奔的博客 ，前端develop，技术分享，不止前端，Not only front-end!',
    keywords: '飞奔,飞奔的博客,前端develop,技术分享,不止前端,feiben,blog,feiben\’s blog,Not only front-end!',
    description: `飞奔的博客是用来发表前端以及其他技术的文章，微信公众号 前端develop，技术分享，Not only front-end!`
  },
  // 来必力评论
  dataUid: 'MTAyMC8zNDQ1My8xMDk5MA==',
  // cnzz
  siteId: 1274633992
}

function setConfig (Vue) {
  Vue.prototype.$config = config
}


export default () => {
  Vue.use(setConfig)
}
