<template>
  <div class="directory-container">
    <ul>
      <li v-for="item in data" :key="item.id">
        <span @click="handleClick(item)" :class="{active: item.isSelect}"> {{ item.name }}</span>
        <Directory :data="item.children" @select="handleClick" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Directory",

  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
  },
  methods: {
    handleClick(item) {
      // 事件向上抛出给父级处理
      this.$emit('select', item)
    },
  },
};
</script>

<style lang="less" scoped>
.directory-container {
  height: 100%;

  ul {
    position: relative;
    height: 100%;
    padding: 0 10px;
  }

  li {
    letter-spacing: 2px;
    margin: 10px 0;
    cursor: pointer;
  }

  .active{
    color: lightsalmon;
    font-weight: 500;
  }
}
</style>
