<template>
  <div class="list-container" v-loading="isLoading" ref="container">
    <div class="blog" v-for="blog in data.rows" :key="blog.id">
      <span class="title">{{ blog.title }}</span>
      <div class="desc">{{ blog.description }}</div>
    </div>
    <Pager
      v-if="data.total"
      :total="data.total"
      :current="routeInfo.pageNum"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script>
import { getBlog } from "@/api/blog.js";
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";

export default {
  name: "LeftList",

  components: {
    Pager,
  },

  mixins: [fetchData()],

  computed: {
    routeInfo: function () {
      const { pageNum, limit } = this.$route.query;
      return {
        pageNum: +pageNum || 1,
        limit: +limit || 10,
        categoryId: +this.$route.params.categoryId || -1,
      };
    },
  },

  watch: {
    "$route.params": async function () {
      console.log('路由变化了');
      this.isLoading = true;
      this.$refs.container.scrollTop = 0

      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },

  methods: {
    async fetchData() {
     return await getBlog(
      this.routeInfo.pageNum, this.routeInfo.limit, this.routeInfo.categoryId
     );
    },
    /**
     * @desc 页码变化时
     */
    handlePageChange(newPageNum) {
      if (newPageNum === this.routeInfo.pageNum) return;
      const query = {
        pageNum: newPageNum,
        limit: this.routeInfo.limit,
      };
      // 有分类
      if (this.routeInfo.categoryId) {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
        // 无分类
      } else {
        this.$router.push({
          name: "blog",
          query,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.list-container {
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
}
.blog {
  border-bottom: 1px solid #bbb;
  padding: 20px 0;
  margin: 0 20px;

  .title {
    display: block;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
