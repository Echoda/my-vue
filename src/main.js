import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from '@/router';

// 扩展Vue实例，添加message方法
import { message } from '@/utils/index'
Vue.prototype.$message = message;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
