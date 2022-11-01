<template>
  <div class="list-container" v-loading="isLoading" ref="container">
    <div class="blog" v-for="blog in list" :key="blog.id">
      <span class="title">{{ blog.title }}</span>
      <div class="desc">{{ blog.description }}</div>
    </div>
    <Pager v-if="total" :total="total" :current="pageNum" @page-change="handlePageChange" />
  </div>
</template>

<script>
import { getBlog } from "@/api/blog.js";
import Pager from "@/components/Pager";

export default {
  name: "LeftList",

  components: {
    Pager,
  },

  data() {
    return {
      list: null,
      total: 0,
      pageNum: 1,
      limit: 10,
      categoryId: null,
      isLoading: true
    };
  },

  watch: {
    "$route.params": {
      handler: function (newVal) {
        this.categoryId = newVal.categoryId;
        this.getList();
      },
      immediate: true,
    },
  },

  created() {
    this.getList();
  },

  methods: {
    /**
     * @desc 页码变化时
     */
    handlePageChange(newPageNum) {
      if (newPageNum === this.pageNum) return;
      this.pageNum = newPageNum;
      this.getList();
    },

    /**
     * @desc 获取列表
     */
    async getList() {
      this.isLoading = true

      
      if(this.$refs.container){
        this.$refs.container.scrollTop = 0
      }
      
      const { total, rows } = await getBlog(
        this.pageNum,
        this.limit,
        this.categoryId
      );
      console.log("total, rows", total, rows);
      this.list = rows;
      this.total = total;
      this.isLoading = false
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
