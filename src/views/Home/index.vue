<template>
  <div class="home-container" ref="home">
    <h1>home</h1>
    <span @click="handleClick">点击</span>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message({
        // type: 'warn',
        msg: 'sdjkvjksjv',
        duration: 1000,
        callback: function() {
          console.log('callback run')
        },
        // container: this.$refs.home
      })
    }
  },
}
</script>

<style lang="less" scoped>
.home-container{
  width: 500px;
  height: 400px;
  border: 1px solid;
}

</style>