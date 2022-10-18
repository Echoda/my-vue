<template>
  <div id="app">
    <Avatar url="https://iconfont.alicdn.com/p/avatar/Jy7B4vBnpdOl.jpeg" :size="100"/>
    <Icon type="home" />
    <Icon type="blog" />
    <Pager :total="total" :current="current" @page-change="handlePageChange"/>
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import Icon from './components/Icon.vue'
import Pager from './components/Pager.vue'

export default {
  name: 'App',
  components: {
    Avatar,
    Icon,
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
.icon-container{
  font-size: 40px;
  color: palegreen;
}
</style>
