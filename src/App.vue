<template>
  <div id="app">
      App
      <!-- 使用 router-link 组件来导航. -->
   <!-- 通过传入 `to` 属性指定链接. -->
   <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
   <router-link to="/foo">Go to Foo</router-link>
   <router-link to="/bar">Go to Bar</router-link>
   <!-- 2种页面跳转  router-link  和 路径-->
  <button @click="gotoByUrl('/foo')">Go to Foo</button>
  <button @click="gotoByUrl('/bar')">Go to Bar</button>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    gotoByUrl(url){//页面跳转
      this.$router.push(url);
    }
  },
}
</script>

<style lang="scss">

</style>
