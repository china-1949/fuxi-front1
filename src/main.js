// 第三方组件的引入放在main.js里面
import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import VueRouter from 'vue-router'
//引入element-ui
import ElementUi from 'element-ui'
//引入axios
import  Axios from 'axios'
//引入VueAxios
import VueAxios from 'vue-axios'

//导入 elemenui 样式
import 'element-ui/lib/theme-chalk/index.css'

//import js
import routes from './js/router/routes'


Vue.use(VueRouter)
Vue.use(ElementUi)
Vue.use(VueAxios,Axios)


Axios.defaults.baseURL = 'http://localhost:8080';
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Axios.defaults.withCredentials= true  //开启跨域请求

const router = new VueRouter({
  mode:'history', //访问链接有#解决
  routes // (缩写) 相当于 routes: routes  es6语法
})


new Vue({
  router,// (缩写) 相当于 router: router
  el: '#app',
  render: h => h(App)
})
