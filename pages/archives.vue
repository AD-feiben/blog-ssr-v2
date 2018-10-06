<template lang="html">
  <div class="archives-wrap">
    <el-collapse
      v-model="activeYear"
      accordion>
      <el-collapse-item
        v-for="item in list"
        :title="`${item.year} / ${item.articles.length}篇文章`"
        :name="item.year"
        :key="item.year">
        <Article
          v-for="(article, index) in item.articles"
          :key="index"
          :showCover="false"
          :article="article"
          class="article"></Article>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Article from '@/components/Article'
import { SUCCESS_CODE } from '@/utils/api'
export default {
  async asyncData ({ app }) {
    const res = await app.$axios.get('/pigeonhole')
    if (res.code == SUCCESS_CODE) {
      return {list: res.data}
    }
  },
  components: {
    Article
  },
  data () {
    return {
      activeYear: [new Date().getFullYear().toString()]
    }
  }
}
</script>

<style lang="less">
.archives-wrap{
  .el-collapse-item__wrap{
    padding: 10px;
  }
  .el-collapse-item__content{
    font-size: 14px;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>