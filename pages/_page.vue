<template>
  <div>
    <div v-if="articles.length">
      <Article
        v-for="item in articles"
        :key="item._id"
        :article="item"/>
      <el-pagination
        :total="total"
        :current-page.sync="page"
        background
        layout="prev, pager, next"
        class="pagination text-center"
        @current-change="currentChange"/>
    </div>
    <div
      v-else
      class="pv-200 text-center">暂无数据 😟</div>
  </div>
</template>

<script>
import Article from '@/components/Article'
import { SUCCESS_CODE } from '@/utils/api'
export default {
  async asyncData ({ app, params, query, error }) {
    let { page } = params
    let { keyword } = query
    keyword = keyword || ''
    page = parseInt(page) || 1
    const res = await app.$axios.get('/article', {keyword, page})
    if (res.code === SUCCESS_CODE) {
      return {...res.data, page, keyword}
    } else {
      error({ statusCode: res.code, message: res.message })
    }
  },
  components: {
    Article
  },
  data () {
    return {
      page: 1,
      total: 0,
      articles: [],
      keyword: ''
    }
  },
  watch: {
    '$route.query': function (newVal) {
      this.page = 1
      this.keyword = newVal.keyword || ''
      this.getData()
    }
  },
  methods: {
    async getData () {
      let page = this.page
      let keyword = this.keyword
      const res = await this.$axios.get('/article', {keyword, page})
      if (res.code === SUCCESS_CODE) {
        this.articles = res.data.articles
        this.total = res.data.total
      }
    },
    currentChange (val) {
      this.$router.replace(`/${val}?keyword=${this.keyword || ''}`)
    }
  }
}
</script>

<style lang="less">

</style>
