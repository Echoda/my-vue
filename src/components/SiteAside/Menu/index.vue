<template>
  <div class="menu-container">
    <a
      v-for="item in menu"
      :key="item.link"
      :href="item.link"
      :class="{ isActive: isActive(item) }"
    >
      <Icon :type="item.icon" />
      <span>{{ item.text }}</span>
    </a>
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
          link: "/",
          icon: "home",
          text: "首页",
        },
        {
          link: "/blog",
          icon: "blog",
          text: "文章",
          startWith: true,
        },
        {
          link: "/project",
          icon: "code",
          text: "项目&效果",
        },
        {
          link: "/about",
          icon: "about",
          text: "关于我",
        },
        {
          link: "/message",
          icon: "message",
          text: "留言",
        },
      ],
    };
  },
  methods: {
    isActive: function (item) {
      const pathname = location.pathname;
      if (item.startWith) {
        return pathname.startsWith(item.link);
      } else {
        return pathname === item.link;
      }
    },
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

  .isActive {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  .icon-container {
    margin-right: 5px;
  }
}
</style>
