<template>
  <div class="right-list-container">
    <ul>
      <li v-for="item in data" :key="item.id">
        <span @click="handleClick(item)" :class="{active: item.isSelect}"> {{ item.name }}</span>
        <RightList :data="item.children" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightList",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(item) {
      const curId = this.$route.params.categoryId
      if(curId === item.id) return
      this.$router.push({
        name: 'categoryBlog',
        params: {
          categoryId: item.id
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.right-list-container {
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
