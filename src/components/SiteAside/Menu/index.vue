<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in menu"
      :key="item.name"
      :to="{ name: item.name }"
      :exact="item.exact"
      active-class="active"
      exact-active-class=""
    >
      <Icon :type="item.icon" />
      <span>{{ item.text }}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      menu: [
        {
          name: "home",
          icon: "home",
          text: "首页",
          exact: true,
        },
        {
          name: "blog",
          icon: "blog",
          text: "文章",
          exact: false,
        },
        {
          name: "project",
          icon: "code",
          text: "项目&效果",
          exact: true,
        },
        {
          name: "about",
          icon: "about",
          text: "关于我",
          exact: true,
        },
        {
          name: "message",
          icon: "message",
          text: "留言",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.menu-container {
  color: #999;
  padding: 20px 0;

  a {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 40px;

    &:hover {
      color: #fff;
    }
  }

  .active {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  .icon-container {
    margin-right: 5px;
  }
}
</style>
