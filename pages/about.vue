<template lang="html">
  <div class="about text-center">
    <div class="pv-50 bb">
      <p class="title mb-40">欢迎使用以下方式与我联系</p>
      <el-row type="flex">
        <el-col
          v-if="$config.social.wechat"
          style="cursor: pointer;"
          @click="popWechat">
          <el-popover
            width="100"
            trigger="hover">
            <img :src="$config.social.wechat">
            <div slot="reference">
              <img src="https://png.icons8.com/ios/50/606266/weixing.png">
              <p>WeChat</p>
            </div>
          </el-popover>
        </el-col>
        <el-col v-if="$config.social.github">
          <a
            :href="$config.social.github"
            target="_blank">
            <img src="https://png.icons8.com/ios/50/606266/github.png">
            <p>GitHub</p>
          </a>
        </el-col>
        <el-col v-if="$config.social.weibo">
          <a
            :href="$config.social.weibo"
            target="_blank">
            <img src="https://png.icons8.com/windows/50/606266/weibo.png">
            <p>微博</p>
          </a>
        </el-col>
        <el-col v-if="$config.social.jianshu">
          <a
            :href="$config.social.jianshu"
            target="_blank">
            <img src="https://png.icons8.com/ios/50/606266/book.png">
            <p>简书</p>
          </a>
        </el-col>
      </el-row>
    </div>

    <div class="pv-50">
      <p class="title mb-40">Bug Feedback</p>
      <el-row type="flex">
        <el-col>
          <a
            :href="`mailto:${$config.feedback.email}`"
            target="_blank">
            <img src="https://png.icons8.com/material-outlined/50/606266/new-post.png">
            <p>Email</p>
          </a>
        </el-col>
        <el-col>
          <a
            :href="$config.feedback.githubIssues"
            target="_blank">
            <img src="https://png.icons8.com/metro/50/606266/comments.png">
            <p>Issues</p>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    popWechat () {}
  }
}
</script>

<style lang="less">
@import '../assets/styles/variable.less';
.about{
  color: @text_normal;
  img{
    width: 30px;
    height: 30px;
  }
  a:hover{
    color: @text_normal;
  }
  .title{
    color: @text_main;
  }
}
</style>