<template>
  <div id="app">
    <div class="test-container">
      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from "./";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 350px;
  height: 500px;
  padding: 20px 0;
  background: #333;
}
</style>
