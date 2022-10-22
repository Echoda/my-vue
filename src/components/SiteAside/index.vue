<template>
  <div class="site-aside-container" :style="{background: background, width: `${width}px`}">
    <Avatar url="https://iconfont.alicdn.com/p/avatar/Jy7B4vBnpdOl.jpeg" :size="120" />
    <Menu />
  </div>
  
</template>

<script>
import Menu from "./Menu";
import Avatar from "@/components/Avatar";

export default {
  name: 'SiteAside',
  components: {
    Menu,
    Avatar
  },
  props: {
    background: {
      type: String,
      default: '#333'
    },
    width: {
      type: Number,
      default: 200
    }
  }

}
</script>

<style lang="less" scoped>
.site-aside-container{
  overflow: hidden;
  width: 100%;
  height: 100%;

  .avatar-container{
    padding: 40px 0 20px;
  }
}

</style>