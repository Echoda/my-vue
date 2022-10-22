<template>
  <div id="app">
    <div class="test-container">
      <Layout>
        <template #left>
          <div class="left">头部</div>
        </template>
        <template #main>
          <div class="main">主区域</div>
        </template>
        <template #right>
          <div class="right">尾部</div>
        </template>
      </Layout>
    </div>
  </div>
</template>

<script>
import Layout from './'
import '@/styles/global.less'

export default {
  name: 'App',
  components: {
    Layout
  },
}
</script>

<style lang="less" scoped>
.test-container{
  width: 80%;
  height: 100%;
  .left, .right{
    background: goldenrod;
  }
  .main{
    background: palevioletred;
  }
}
</style>
