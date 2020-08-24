# fuxi-front1

> A Vue.js project

### 第三方组件安装

``` bash


 vue-router: npm install vue-router -d 
 element-ui: npm install element-ui –d 
 axios: npm install axios -d 
 vue-axios: npm install vue-axios –d 
 qs: npm install qs –d 
 vuex: npm install vuex –d


注意：
<!-- 路由匹配到的组件将渲染在这里 router-view 必须指定渲染-->
 <router-view></router-view>
 
 <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    
    <!-- 2种页面跳转  router-link  和 路径方法-->
     <router-link to="/bar">Go to Bar</router-link>
      <button @click="gotoByUrl('/foo')">Go to Foo</button>
      
        methods:{
          gotoByUrl(url){//页面跳转
            this.$router.push(url);
          }
        },

```



### 第三方资料

``` bash


 vue-router: https://router.vuejs.org/zh/guide/#html
 element-ui: http://element-cn.eleme.io/#/zh-CN/component/installation 
 axios: https://github.com/axios/axios
 vue-axios: https://www.npmjs.com/package/vue-axios
 qs: https://www.npmjs.com/package/qs
 vuex: https://vuex.vuejs.org/zh/

``
