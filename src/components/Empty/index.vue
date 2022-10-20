<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: "Empty",
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.empty-container{
  .self-center();
  color: #d1d1d1;
  text-align: center;

  .icon-container{
    font-size: 100px;
    margin-bottom: 15px;
  }
}
</style>
