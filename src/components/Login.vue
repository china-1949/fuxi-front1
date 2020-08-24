<template>
  <div id="login">
    Login
    <el-input v-model="user.username" placeholder="输入用户名"></el-input>
    <el-input v-model="user.password" placeholder="输入密码"></el-input>
    <el-button>默认按钮</el-button>
     <router-link to="/foo">Go to Foo</router-link>

  </div>


</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user:{
        username: '',
        password : ''
      },

      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
