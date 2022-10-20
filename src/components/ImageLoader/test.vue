<template>
  <div class="test-container">
    <imageLoader
    src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0A/01/ChMlWlx48_-IPaIeACiSSJ8Spe4AAIiVgPF3ykAKJJg340.jpg"
    placeholder="https://p.ssl.qhimg.com/t014f3a1e80674509e7.jpg?&w=146&h=91&rs=0"
    :duration="1000"
    @load="handleImgLoaded"
  />
  </div>
</template>

<script>
import ImageLoader from "./";

export default {
  name: "App",
  components: {
    ImageLoader,
  },
  methods: {
    handleImgLoaded() {
      console.log('图片加载完成');
    }
  }
};
</script>

<style lang="less" scoped>
.test-container{
  width: 500px;
  height: 500px;
  border: 1px solid green;
}
</style>
