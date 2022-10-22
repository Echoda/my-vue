<template>
  <div id="app">
    <Layout>
        <template #left>
          <SiteAside></SiteAside>
        </template>
        <template #main>
          <div class="main">主区域</div>
        </template>
      </Layout>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    SiteAside,
    Layout
  }
}
</script>

<style lang="less" scoped>
.left, .right{
    background: goldenrod;
  }
</style>
