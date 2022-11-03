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

  data() {
    return {
      categoryId: null,
      isLoading: true,
    };
  },

  computed: {
    list: function () {
      return this.data?.map((it) => {
        return { ...it, isSelect: it.id === this.categoryId };
      });
    },
  },

  watch: {
    "$route.params": {
      handler: function (newVal) {
        this.categoryId = newVal.categoryId;
      },
      immediate: true,
    },
  },

  methods: {
    async fetchData() {
      return getBlogType();
    },

    handleSelect(item) {
      console.log("item", item);
      console.log(this.categoryId, item.id);
      if (this.categoryId === item.id) return;
      this.$router.push({
        name: "categoryBlog",
        params: {
          categoryId: item.id,
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
