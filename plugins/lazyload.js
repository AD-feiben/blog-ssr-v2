import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default () => {
  Vue.use(VueLazyload, {
    error: 'images/error.png',
    loading: 'images/loading.gif',
  })
}