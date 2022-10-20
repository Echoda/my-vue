<template>
  <div id="app">
    <div class="test-container">
      <SiteAside background="darkgreen" />
    </div>
  </div>
</template>

<script>
import SiteAside from "./";
import '@/styles/global.less';

export default {
  name: "App",
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container{
  width: 260px;
  height: 100vh;
}
</style>
