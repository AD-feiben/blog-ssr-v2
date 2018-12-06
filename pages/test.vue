<template lang="html">
  <div class="test-container">
    <h2>Background Image Lazyload Test</h2>
    <!-- background lazyload -->
    <ul>
      <li
        v-lazy:background-image="item"
        v-for="(item, index) in imgs"
        :key="index">
      </li>
    </ul>

    <h2>Video Test</h2>
    <div class="test-video">
      <video
        class="video"
        muted
        loop
        autoplay
        preload>
        <source
          :src="url"
          type="video/mp4">
      </video>
    </div>

    <div
      id="dplayer"
      ref="dplayer"
      class="test-player">
    </div>
  </div>
</template>

<script>
import 'DPlayer/dist/DPlayer.min.css';
if (process.browser) { // 在这里根据环境引入wow.js
  var DPlayer = require('DPlayer')
}
export default {
  data () {
    return {
      imgs: [
        'https://i1.mifile.cn/f/i/2018/mix3/index_section03_phone.png',
        'https://i1.mifile.cn/f/i/2018/mix3/index_section04_2.jpg',
        'https://i1.mifile.cn/f/i/2018/mix3/index_section05_2.jpg',
        'https://i1.mifile.cn/f/i/2018/mix3/index_section_09.jpg',
      ],
      url: 'https://i1.mifile.cn/f/i/2018/mix3/index_video_local.mp4',
      mp4Url: 'https://v.mifile.cn/b2c-mimall-media/2a391cb98092e5aa9f81c2cfd6578d48.mp4'
    }
  },
  mounted () {
    if (process.browser) {
      this.$nextTick(() => {
        const dp = new DPlayer({
          container: this.$refs.dplayer,
          video: {
            url: this.mp4Url
          },
          theme: '#ff7000'
        })
      })
    }
  }
}
</script>

<style lang="less">
.test-container{
  h2{
    padding: 10px 0;
    text-align: center;
    color: #333;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, .5);
    background-color: #f3f3f3;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  li{
    height: 40em;
    background-color: #111;
    background-size: contain;
    background-position: center;
    // background-repeat: no-repeat;
    @media (max-width: 767px) {
      height: 20em;
    }
  }
  .test-player{
    position: relative;
  }
  .test-video{
    .video{
      width: 100%;
    }
  }
  video{
    vertical-align: top;
  }
}
</style>
