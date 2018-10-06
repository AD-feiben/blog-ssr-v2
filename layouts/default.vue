<template>
  <el-container direction="vertical">
    <m-header></m-header>
    <el-main class="safeArea main"><nuxt/></el-main>
    <m-footer></m-footer>
  </el-container>
</template>

<script>
import MHeader from '@/components/MHeader'
import MFooter from '@/components/MFooter'
export default {
  components: {
    MHeader,
    MFooter
  },
  head () {
    return {
      title: this.$config.seo.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$config.seo.keywords },
        { hid: 'description', name: 'description', content: this.$config.seo.description }
      ]
    }
  }
}
</script>

<style lang="less">
.main{ min-height: 78vh; }
</style>
