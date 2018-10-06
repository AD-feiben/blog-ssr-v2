<template lang="html">
  <div class="tag-wrap">
    <div v-show="showTag">
      <p class="text-center mb-20">目前共计{{ tags.length }}个标签</p>
      <el-badge
        v-for="(item, index) in tags"
        :key="index"
        :value="item.count"
        class="m-20">
        <el-button
          size="small"
          @click="choiceTag(item.tag)">{{ item.tag }}</el-button>
      </el-badge>
    </div>
    <div v-show="!showTag">
      <div class="text-center mb-20">
        <el-tag
          closable
          @close="handleClose">
          {{ tag }}
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
    const res = await app.$axios.get('tags')
    if (res.code === SUCCESS_CODE) {
      return res.data
    }
  },
  components: {
    Article
  },
  data () {
    return {
      showTag: true,
      tag: '',
      tags: [],
      articles: [],
      page: 1,
      total: 0
    }
  },
  methods: {
    getData () {
      this.$axios.get('/article', {tag: this.tag, page: this.page}).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.articles = res.data.articles
          this.total = res.data.total
          this.showTag = false
        }
      })
    },
    choiceTag (tag) {
      this.tag = tag
      this.page = 1
      this.getData()
    },
    handleClose () {
      this.showTag = true
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