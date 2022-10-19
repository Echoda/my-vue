<template>
  <div id="app">
    <Pager :total="total" :current="current" @page-change="handlePageChange"/>
  </div>
</template>

<script>
import Pager from './'

export default {
  name: 'App',
  components: {
    Pager
  },
  data() {
    return {
      current: 7,
      total: 100
    }
  },
  methods: {
    handlePageChange(page) {
      console.log('page', page);
      this.current = page
    }
  },
}
</script>

<style lang="less" scoped>
</style>
