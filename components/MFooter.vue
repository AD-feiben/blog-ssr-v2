<template lang="html">
  <div class="footer-wrap card">
    <el-footer
      class="safeArea pv-40"
      height="auto">
      <el-row
        type="flex">

        <el-col
          :md="{span: 16}"
          :sm="{span: 14}"
          :xs="{span: 12}">
          <el-row>
            <el-col :span="24">友情链接</el-col>
            <el-col
              v-for="(item, index) in $config.footer.friLinks"
              :key="index"
              :lg="{span: 6}"
              :md="{span: 8}"
              :sm="{span: 12}"
              :xs="{span: 24}"
              class="mt-10">
              <a
                :href="item.url"
                :title="item.title"
                target="_blank">{{ item.name }}</a>
            </el-col>
          </el-row>
        </el-col>

        <el-col
          :md="{span: 8}"
          :sm="{span: 10}"
          :xs="{span: 12}"
          class="text-right">
          <el-row class="mb-20">
            <p>{{ `${$config.author} &copy; ${$config.footer.since} - ${curYear}` }}</p>
          </el-row>
          <el-row>
            <p>Powered By
              <a
                href="http://github.com/ad-feiben"
                target="_blank">飞奔</a>
            </p>
          </el-row>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="less">
.footer-wrap{
  background-color: #f8fbfd;
}
</style>
