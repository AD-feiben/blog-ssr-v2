<template lang="html">
  <section
    class="article-card mb-10 p-20 wow">
    <nuxt-link
      :to="`/detail/${article._id}`"
      :title="article.title">
      <el-row
        v-if="showCover && article.cover"
        class="hidden-sm-and-up">
        <el-col>
          <img
            v-lazy="article.cover"
            :alt="article.title"
            class="cover-img">
        </el-col>
      </el-row>
      <el-row
        type="flex"
        align="middle">
        <el-col
          :md="{span: showCover && article.cover ? 18 : 24}"
          :sm="{span: showCover && article.cover ? 16 : 24}"
          :xs="{span: 24}"
          class="text-wrap">
          <el-row>
            <h3 class="title mv-5">{{ article.title }}</h3>
          </el-row>
          <el-row class="time mv-5">
            <el-col>
              <span class="mr-10">{{ article.publishedDate }}</span>
              <img
                src="https://png.icons8.com/ios-glyphs/50/909399/visible.png"
                class="icon">
              <span>{{ article.readingQuantity }}</span>
            </el-col>
          </el-row>
          <el-row>
            <p class="desc mv-5">{{ article.desc }}</p>
          </el-row>
          <el-row
            type="flex"
            align="middle"
            class="classify mv-5">
            <el-col>
              <img
                src="https://png.icons8.com/ios-glyphs/50/909399/categorize.png"
                class="icon">
              <span>{{ article.classify }}</span>
              <el-tag
                v-for="(item, index) in tags"
                :key="index"
                type="info"
                size="mini"
                class="ml-10">{{ item }}</el-tag>
            </el-col>
          </el-row>
        </el-col>

        <el-col
          v-if="showCover && article.cover"
          :md="{span: 7, offset: 1}"
          :sm="{span: 5, offset: 1}"
          class="hidden-xs-only">
          <img
            v-lazy="article.cover"
            :alt="article.title"
            class="cover-img">
        </el-col>
      </el-row>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    showCover: {
      type: Boolean,
      default: true
    },
    article: {
      type: Object,
      default: () => {},
      validator: function (val) {
        const requireKeys = ['_id', 'title', 'desc', 'classify', 'publishedDate']
        for (let i = 0, len = requireKeys.length; i < len; i++) {
          if (!val.hasOwnProperty(requireKeys[i])) return false
        }
        return true
      }
    }
  },
  data () {
    return {
      tags: this.article.tags ? this.article.tags.split(',') : []
    }
  }
}
</script>

<style lang="less">
@import '../assets/styles/variable.less';

.article-card{
  transition: all .5s;
  cursor: pointer;
  .title{
    color: @text_main;
  }
  .time, .classify{
    color: @text_minor;
  }
  .desc{
    color: @text_normal;
  }
  .cover-img{
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  &:nth-of-type(2n){
    background-color: #fafafa;
  }
  &:hover{
    transform: translateY(-2px);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  @media (max-width: 767px) {
    padding: 0;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .text-wrap{
      padding: 10px;
    }
  }
  .icon{
    width: 1.25em;
    height: 1.25em;
    vertical-align: text-top;
  }
}
</style>
