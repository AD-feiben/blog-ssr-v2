<template lang="html">
  <div class="tag-wrap">
    <div v-show="showClassify">
      <p class="text-center mb-20">目前共计{{ classifies.length }}个分类</p>
      <el-badge
        v-for="(item, index) in classifies"
        :key="index"
        :value="item.count"
        class="m-20">
        <el-button
          size="small"
          @click="choiceClassify(item.classify)">{{ item.classify }}</el-button>
      </el-badge>
    </div>
    <div v-show="!showClassify">
      <div class="text-center mb-20">
        <el-tag
          closable
          @close="handleClose">
          {{ classify }}
        </el-tag>
      </div>
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
  </div>
</template>

<script>
import Article from '@/components/Article'
import { SUCCESS_CODE } from '@/utils/api'
export default {
  async asyncData ({ app }) {
    const res = await app.$axios.get('classify')
    if (res.code === SUCCESS_CODE) {
      return res.data
    }
  },
  components: {
    Article
  },
  data () {
    return {
      showClassify: true,
      classify: '',
      classifies: [],
      articles: [],
      page: 1,
      total: 0
    }
  },
  methods: {
    getData () {
      this.$axios.get('/article', {classify: this.classify, page: this.page}).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.articles = res.data.articles
          this.total = res.data.total
          this.showClassify = false
        }
      })
    },
    choiceClassify (classify) {
      this.classify = classify
      this.page = 1
      this.getData()
    },
    handleClose () {
      this.showClassify = true
    },
    currentChange (val) {
      this.page = val
      this.getData()
    }
  }
}
</script>

<style lang="less">
</style>