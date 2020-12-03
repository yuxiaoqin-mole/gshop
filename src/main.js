// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js

import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router'

new Vue({
  el: '#app',
  //vue1.0写法
  // components: {App},
  // template: '<App>',
  //vue2.0写法
  render: h=> h(App),
  router
})
