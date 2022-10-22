import Vue from 'vue'

// 获取组件的真实dom根节点
export default function getComponentRootDom(component, props) {
  const comp = new Vue({
    render: (h) => h(component, { props })
  })
  comp.$mount()
  return comp.$el
};