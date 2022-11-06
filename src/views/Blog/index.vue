<template>
  <Layout>
    <LeftList />

    <template #right>
      <RightList title="文章分类"></RightList>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import RightList from "./components/RightList";
import LeftList from "./components/LeftList";

export default {
  components: {
    Layout,
    RightList,
    LeftList,
  },
};
</script>
