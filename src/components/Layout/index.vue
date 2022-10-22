<template>
  <div class="layout-container">
    <slot name="left" class="left" ></slot>
    <slot name="main" class="mian"></slot>
    <slot name="right" class="right"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container{
  width: 100%;
  height: 100%;
  display: flex;

  .left, .right{
    height: 100%;
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main{
    flex: 1 1 auto;
    overflow: hidden;
  }
}

</style>