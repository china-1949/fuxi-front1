// 第三方组件的引入放在main.js里面
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//import js
import routes from './js/router/routes'


Vue.use(VueRouter)


const router = new VueRouter({
  mode:'history', //访问链接有#解决
  routes // (缩写) 相当于 routes: routes  es6语法
})


new Vue({
  router,// (缩写) 相当于 router: router
  el: '#app',
  render: h => h(App)
})
