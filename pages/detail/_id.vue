<template lang="html">
  <div class="detail-wrap">
    <h1 class="mb-10">{{ title }}</h1>
    <p class="minor">
      <span v-if="publishedDate">{{ publishedDate }}</span>
      <span v-if="classify">
        <img
          src="https://png.icons8.com/ios-glyphs/50/909399/categorize.png"
          class="icon"> {{ classify }}
        <el-tag
          v-for="(item, index) in tags"
          :key="index"
          type="info"
          size="mini"
          class="mh-5">{{ item }}</el-tag>
      </span>
      <span v-if="readingQuantity">
        <img
          src="https://png.icons8.com/ios-glyphs/50/909399/visible.png"
          class="icon"> {{ readingQuantity }}
      </span>
    </p>

    <div class="content-wrap">
      <el-row>
        <el-col
          :sm="{span: toc ? 20 : 24}"
          :xs="{span: 24}">
          <vue-markdown
            ref="content"
            :toc-first-level="1"
            :toc-last-level="3"
            toc
            toc-id="toc"
            class="content"
            @rendered="handleRendered"
            @toc-rendered="handleToc">{{ content }}</vue-markdown>
        </el-col>
        <el-col
          :sm="{span: 3, offset: 1}"
          class="hidden-xs-only">
          <div
            v-if="toc"
            id="toc"
            class="p-10 card"
            @click="tocClick"
            v-html="toc"/>
        </el-col>
      </el-row>
    </div>

    <div id="comment-wrap">
      <!-- 来必力City版安装代码 -->
      <div
        id="lv-container"
        :data-uid="$config.dataUid"
        data-id="city"/>
        <!-- City版安装代码已完成 -->
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'
import jump from 'jump.js'
import { SUCCESS_CODE } from '@/utils/api'

export default {
  async asyncData ({ app, params }) {
    let { id } = params
    if (id) {
      let res = await app.$axios.get(`/article/${id}`)
      if (res.code === SUCCESS_CODE) {
        let tags = res.data.tags ? res.data.tags.split(',') : []
        return {...res.data, tags}
      }
    }
  },
  components: {
    VueMarkdown
  },
  data () {
    return {
      toc: ''
    }
  },
  methods: {
    handleToc (toc) {
      this.toc = toc
    },
    handleRendered (html) {
      this.$nextTick(() => {
        try {
          Prism.highlightAll()
        } catch (error) {}
      })
    },
    tocClick (e) {
      if (e.target.tagName === 'A') {
        let id = decodeURIComponent(e.target.hash).substring(1)
        let node = document.getElementById(id)
        jump(node, {
          offset: -80,
          duration: 200
        })
        window.event? window.event.cancelBubble = true : e.stopPropagation()
        e.preventDefault ? e.preventDefault() : window.event.returnValue = false
      }
    }
  },
  head () {
    return {
      title: this.title + '，' + this.$config.seo.title,
      script: [
        { src: 'https://cdn-city.livere.com/js/embed.dist.js', async: true}
      ],
      meta: [
        { hid: 'keywords', name: 'keywords', content: `${this.classify},${this.tags},${this.$config.seo.keywords}` }
      ]
    }
  }
}
</script>

<style lang="less">
@import '../../assets/styles/variable.less';
@import '../../node_modules/prismjs/themes/prism.css';
.detail-wrap{
  .minor{
    color: @text_minor;
  }
  .icon{
    width: 1.25em;
    height: 1.25em;
    vertical-align: text-top;
  }
  #toc{
    position: fixed;
    max-width: 150px;
    ol,ul,dir,menu,dd{margin-left: 10px}
  }
}
.content-wrap{
  .content{
    line-height: 2em;
    li{display:list-item}
    head{display:none}
    table{
      display:table;
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid #d9d9d9;
      border-collapse: collapse;
      border-left: none;
      word-break: normal;
    }
    tr{
      display:table-row;
      &:nth-of-type(2n){
        background-color: #f8f8f8;
      }
    }
    thead{
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    tbody{display:table-row-group}
    tfoot{display:table-footer-group}
    col{display:table-column}
    colgroup{display:table-column-group}
    td,th{
      display:table-cell;
      padding: 8px;
      border: 1px solid #d9d9d9;
      line-height: 20px;
    }
    caption{display:table-caption}
    th{font-weight:bolder; text-align:center}
    caption{text-align:center}
    body{line-height:1.12}
    h1{font-size:2em; margin:.67em 0}
    h2{font-size:1.5em; margin:.75em 0}
    h3{font-size:1.17em; margin:.83em 0}
    h4,p,blockquote,ul,fieldset,form,ol,dl,dir,menu{margin:1.12em 0}
    blockquote{
      color: #666;
      border-left: 4px solid #ddd;
      padding-left: 20px;
      margin-left: 0;
      font-size: .875em;
      p{
        margin: 0;
        font-style: italic;
      }
    }
    img{
      max-width: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
      border: 0;
    }
    h5{font-size:.83em; margin:1.5em 0}
    h6{font-size:.75em; margin:1.67em 0}
    h1,h2,h3,h4,h5,h6,b,strong{font-weight:bolder}
    i,cite,em,var,address{font-style:italic}
    pre,code{
      color: #000;
      background: #f6f6f6;
      overflow-x: scroll;
    }
    // pre,tt,code,kbd,samp{font-family:monospace}
    pre{white-space:pre; padding: 5px;}
    button,textarea,input,object,select{display:inline-block;}
    big{font-size:1.17em}
    small,sub,sup{font-size:.83em}
    sub{vertical-align:sub}
    sup{vertical-align:super}
    table{border-spacing:2px;}
    thead,tbody,tfoot{vertical-align:middle}
    td,th{vertical-align:inherit}
    s,strike,del{text-decoration:line-through}
    hr{
      margin: 0 0 20px;
      border: 0;
      border-top: 1px solid #d9d9d9!important;
    }
    ol,ul,dir,menu,dd{margin-left:40px}
    ol{
      li{list-style-type:decimal}
    }
    ul{
      li{list-style-type: disc}
    }
    ol ul,ul ol,ul ul,ol ol{margin-top:0; margin-bottom:0}
    u,ins{text-decoration:underline}
    :before,:after{white-space:pre-line}
    center{text-align:center}
    abbr,acronym{font-variant:small-caps; letter-spacing:0.1em}
    :link,:visited{text-decoration:underline}
    :focus{outline:thin dotted invert}
    @media print{
      h1{page-break-before:always}
      h1,h2,h3,
      h4,h5,h6{page-break-after:avoid}
      ul,ol,dl{page-break-before:avoid}
    }
  }
}
</style>
