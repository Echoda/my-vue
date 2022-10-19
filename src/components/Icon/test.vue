<template>
  <div id="app">
    <Icon type="home" />
    <Icon type="blog" />
  </div>
</template>

<script>
import Icon from "./";

export default {
  name: "App",
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
.icon-container {
  font-size: 40px;
  color: palegreen;
}
</style>
