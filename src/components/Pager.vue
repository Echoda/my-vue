<template>
  <div class="pager-container">
    <a :class="{ disabled: current === 1 }" @click="handlePageChange(1)"
      >|&lt;&lt;</a
    >
    <a
      :class="{ disabled: current === 1 }"
      @click="handlePageChange(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="n in visiblePageNumArr"
      :key="n"
      :class="{ active: current === n }"
      @click="handlePageChange(n)"
      >{{ n }}</a
    >
    <a
      :class="{ disabled: current === maxPageNum }"
      @click="handlePageChange(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{ disabled: current === maxPageNum }"
      @click="handlePageChange(maxPageNum)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visiblePageNum: {
      type: Number,
      default: 7,
    },
  },
  computed: {
    maxPageNum: function () {
      return Math.ceil(this.total / this.limit);
    },
    visiblePageNumArr: function () {
      let min = this.current - Math.floor(this.visiblePageNum / 2);
      min = min < 1 ? 1 : min;
      let max = min + this.visiblePageNum - 1;
      if(max > this.maxPageNum){
        
      }
      max = max > this.maxPageNum ? this.maxPageNum : max;
      const arr = [];
      for (var i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handlePageChange(newPage) {
      if (newPage === this.current || newPage < 1 || newPage > this.maxPageNum)
        return;

      this.$emit("page-change", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
.pager-container {
  display: flex;
  justify-content: center;

  a {
    padding: 0 5px;
  }

  .active {
    font-weight: 800;
  }
  .disabled {
    cursor: not-allowed;
  }
}
</style>
