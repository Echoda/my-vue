<template>
  <div class="home-container" ref="home">
    <h1>home</h1>
    <span @click="handleClick">点击</span>
  </div>
</template>

<script>
import { getBlogType } from '@/api/blog'

export default {  
  methods: {
    async handleClick() {
      const res = await getBlogType()
      console.log('res', res);
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