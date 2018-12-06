<template lang="html">
  <div class="header-wrap">
    <el-row
      type="flex"
      justify="center"
      align="middle"
      class="description text-center hidden-sm-and-up">
      <el-col>
        <p>{{ $config.header.description }}</p>
      </el-col>
    </el-row>
    <div
      class="header-box bb card"
      @click="goTop">
      <el-header
        class="safeArea">
        <el-row
          class="header-container"
          type="flex"
          justify="space-between"
          align="middle"
          style="height: 100%;">
          <el-col
            :span="2"
            class="img-box logo-box">
            <nuxt-link to="/">
              <img
                :src="$config.logo"
                alt="logo">
            </nuxt-link>
          </el-col>
          <el-col
            :span="2"
            :xs="{span: 3}">
            <h1 class="author">{{ $config.author }}</h1>
          </el-col>
          <!-- nav link -->
          <el-col
            :span="20"
            class="hidden-xs-only">
            <!-- search input -->
            <el-row
              type="flex"
              justify="end"
              class="nav-box text-center">
              <el-col
                :lg="{span: 6}"
                :md="{span: 7}"
                :sm="{span: 7}"
                class="hidden-xs-only input-box">
                <el-input
                  v-model="keyword"
                  placeholder="标题、标签、分类"
                  size="mini"
                  clearable
                  @keyup.enter.native="search">
                  <el-button
                    slot="append"
                    size="mini"
                    type="primary"
                    icon="el-icon-search"
                    @click="search"></el-button>
                </el-input>
              </el-col>
              <!-- links -->
              <el-col
                v-for="(item, index) in menus"
                :key="index"
                :md="{span: 2}"
                :sm="{span: 3}"
                class="text-right">
                <nuxt-link
                  :to="item.path"
                  :class="{active: item.active}">{{ item.name }}</nuxt-link>
              </el-col>
            </el-row>
          </el-col>
          <!-- meun icon -->
          <el-col
            class="hidden-sm-and-up small-img-box">
            <img
              v-show="!showMenu"
              src="https://png.icons8.com/material/50/000000/menu.png"
              alt="menu"
              @click="showMenu = true">
            <img
              v-show="showMenu"
              src="https://png.icons8.com/material/50/000000/delete-sign.png"
              alt="close"
              @click="showMenu = false">
          </el-col>
        </el-row>
      </el-header>
      <el-collapse-transition>
        <ul
          v-show="showMenu"
          class="hidden-sm-and-up link-wrap">
          <li
            v-for="(item, index) in menus"
            :key="index"
            class="text-center link-item">
            <nuxt-link
              :to="item.path"
              :class="{active: item.active}"
              @click.native="showMenu = false">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import jump from 'jump.js'
export default {
  data () {
    return {
      menus: [
        {name: '首页', path: '/', active: false},
        {name: '分类', path: '/categories', active: false},
        {name: '标签', path: '/tags', active: false},
        {name: '归档', path: '/archives', active: false},
        {name: '关于', path: '/about', active: false}
      ],
      showMenu: false,
      keyword: '',
      toCls: [
        'el-header safeArea',
        'nav-box text-center el-row is-justify-end el-row--flex',
        'header-container el-row is-justify-space-between is-align-middle el-row--flex'
      ]
    }
  },
  watch: {
    '$route.name': function (newVal) {
      this.fixActive(newVal)
    }
  },
  created () {
    this.fixActive(this.$route.name)
  },
  methods: {
    search () {
      this.$router.push(`/?keyword=${this.keyword}`)
    },
    fixActive (routeName) {
      const routerNames = ['page', 'categories', 'tags', 'archives', 'about']
      this.menus.forEach(item => {
        item.active = false
      })
      let index = routerNames.indexOf(routeName)
      if (index > -1) this.menus[index].active = true
    },
    goTop (e) {
      console.log(e.target.className)
      if (this.toCls.includes(e.target.className)) {
        let node = document.body
        jump(node, {
          offset: 0,
          duration: 200
        })
      }
    }
  },
}
</script>

<style lang="less">
@import '../assets/styles/variable.less';
.header-wrap{
  height: 60px;
  .description{
    height: 100%;
  }
}
.header-box{
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, .9);
  z-index: 9999;
}
.logo-box{
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  &:hover{
    animation-name: rotate;
    animation-duration: .8s;
  }
}
.nav-box{
  font-size: 1em;
  a{
    line-height: 26px;
  }
}
.img-box{
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.small-img-box{
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.author{
  margin-left: -10%;
  font-weight: 500;
  white-space: nowrap;
  font-size: 1.2em;
  @media (max-width: 767px) {
    margin-left: 0;
    text-align: center;
  }
}
.link-wrap{
  background-color: #fff;
}
.link-item{
  font-size: 1em;
  line-height: 2.5em;
}
.active{
  color: @primary;
}
</style>