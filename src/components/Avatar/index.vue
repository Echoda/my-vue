<!-- vue serve src/components/Avatar/test.vue -->
<template>
  <div class="avatar-container">
    <img :src="url" :style="{width: size + 'px', height: size + 'px'}"/>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {
      type: String,
      require: true
    },
    size: {
      type: Number,
      default: 50
    }
  }

}
</script>

<style lang="less" scoped>
.avatar-container{
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
}
</style>