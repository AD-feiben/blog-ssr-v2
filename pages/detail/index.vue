<template lang="html">
  <div class="empty-tip">
    <h4>Article id is empty!<br/>Please check the path.</h4>
    <nuxt-link to="/">👉Go Home</nuxt-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.empty-tip{
  text-align: center;
  h4{
    margin: 40px 0;
    font-size: 26px;
    line-height: 2em;
    color: #333;
  }
}
</style>