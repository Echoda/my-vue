<template>
  <div class="test-container">
    <Empty text="no data" />
  </div>
</template>

<script>
import Empty from "./";

export default {
  name: "App",
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container{
  width: 500px;
  height: 500px;
  border: 1px solid peru;
  position: relative;
}
</style>
