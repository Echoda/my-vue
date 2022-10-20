<template>
  <div class="image-loader-container">
    <img v-if="isShowPlaceholder" :src="placeholder" class="placeholder-img" />
    <img
      :src="src"
      :style="{ opacity: isImgLoaded ? 1 : 0, transition: `${duration}ms` }"
      @load="handleImageLoaded"
    />
  </div>
</template>

<script>
export default {
  name: "imageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      isImgLoaded: false,
      isShowPlaceholder: true,
    };
  },
  methods: {
    handleImageLoaded() {
      this.isImgLoaded = true;
      setTimeout(() => {
        this.isShowPlaceholder = false;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    .selt-fill();
    object-fit: cover;
  }

  .placeholder-img {
    filter: blur(2vw);
  }
}
</style>
