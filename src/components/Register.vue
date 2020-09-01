<template>
  <div id="portal-template">
    <img class="portal-logo" src="../assets/images/logo.png" alt="秒杀logo">
    <div id="register">
      <el-form label-position="top" label-width="80px" :model="user"
               :rules="rules" ref="ruleForm">
        <el-form-item label="用户名 " prop="username">
          <el-input v-model="user.username" placeholder="输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码 " prop="password">
        <el-input type="password" v-model="user.password" placeholder="输入密码"></el-input>
      </el-form-item>
        <el-form-item label="确认密码 " prop="repassword">
          <el-input type="repassword" v-model="user.repassword" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-button class="submit-btn" type="primary"  @click="register('ruleForm')">登录</el-button>
      </el-form>


    </div>

  </div>
</template>

<script>

  export default {
    name: 'register',
    data () {
      return {
        user:{
          username: '',
          password : '',
          repassword:''
        },
        rules:{
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },

          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },

          ],
          repassword: [
            { required: true, message: '请确认密码', trigger: 'blur' },

          ],

        },


      }
    },
    //使用表单提交验证
    methods: {
      register(formName) {
        var self =this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('可以注册了')
          }
        });
      },


    },
  }
</script>

<style lang="scss">
  @import "../assets/css/portal-template.css";
</style>
