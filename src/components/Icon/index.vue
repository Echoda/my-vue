<!-- vue serve src/components/Icon/test.vue -->
<template>
  <i class="iconfont icon-container" :class="iconClass"></i>
</template>

<script>
const iconMap = {
  home: "icon-home",
  blog: "icon--blog",
  about: "icon-guanyu_o",
  message: "icon-liuyanban-05",
  code: "icon-code",
  empty: "icon-empty",
  success: "icon-success",
  error: "icon-error",
  warn: "icon-warning",
  info: "icon-information",
};
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconClass: function () {
      return iconMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_3711371_9muoftlo5xk.css";
</style>
