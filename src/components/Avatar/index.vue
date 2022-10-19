<!-- vue serve src/components/Avatar/test.vue -->
<template>
  <img class="Avatar-container" :src="url" :style="{width: size + 'px', height: size + 'px'}">
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

<style scoped>
.Avatar-container{
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>