<template>
  <div class="right-list-container">
    <h3 class="title">{{ title }}</h3>
    <Directory :data="list" @select="handleSelect" v-loading="isLoading" />
  </div>
</template>

<script>
import Directory from "./Directory.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogType } from "@/api/blog.js";

export default {
  name: "RightList",
  components: {
    Directory,
  },
  props: {
    title: String,
  },
  mixins: [fetchData()],

  computed: {
    categoryId: function () {
      return this.$route.params.categoryId || -1;
    },

    list: function () {
      const res = [
        {
          id: -1,
          name: "全部",
        },
        ...this.data,
      ];

      return res.map((it) => {
        return { ...it, isSelect: it.id === this.categoryId };
      });
    },
  },

  methods: {
    async fetchData() {
      return await getBlogType();
    },

    handleSelect(item) {
      if (this.categoryId === item.id) return;
      this.$router.push({
        name: "categoryBlog",
        params: {
          categoryId: item.id,
        },
        query: {
          pageNum: 1,
          limit: this.$route.query.limit || 10,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.right-list-container {
  width: 230px;
  height: calc(100% - 25px);
  overflow-y: auto;
  padding: 10px 0 10px 10px;

  .title {
    margin: 10px 0;
  }
}
</style>
