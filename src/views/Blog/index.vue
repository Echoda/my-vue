<template>
  <Layout>
    <template>
      <LeftList />
    </template>
    <template #right>
      <div class="right-container">
        <h3 class="title">文章分类</h3>
        <RightList :data="list" v-loading="isLoading"></RightList>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import RightList from "./components/RightList";
import LeftList from "./components/LeftList";

import fetchData from "@/mixins/fetchData";
import { getBlogType } from "@/api/blog.js";

export default {
  components: {
    Layout,
    RightList,
    LeftList
  },

  mixins: [fetchData()],

  computed: {
    list: function(){
      return this.data?.map((it) => {
        return { ...it, isSelect: it.id === this.curCategoryId };
      });
    },
    curCategoryId: function(){
      return +this.$route.params.categoryId
    },
  },

  methods: {
    async fetchData() {
      return getBlogType();
    },
  },
};
</script>

<style lang="less" scoped>
.right-container {
  width: 230px;
  height: calc(100% - 25px);
  overflow-y: auto;
  padding: 10px 0 10px 10px;

  .title {
    margin: 10px 0;
  }
}
</style>
