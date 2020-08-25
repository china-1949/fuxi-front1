<template>
  <div id="portal-template">
    <img class="portal-logo" src="../assets/images/logo.png" alt="秒杀logo">
      <div id="login">
        <el-form label-position="top" label-width="80px" :model="user"
                 :rules="rules" ref="ruleForm">
          <el-form-item label="用户名 " prop="username">
            <el-input v-model="user.username" placeholder="输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码 " prop="password">
            <el-input type="password" v-model="user.password" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-button class="submit-btn" type="primary"  @click="login('ruleForm')">登录</el-button>
        </el-form>


      </div>

  </div>
</template>

<script>
  //引入qs
   import qs from 'qs';
export default {
  name: 'login',
  data () {
    return {
      user:{
        username: '',
        password : ''
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },

        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },

        ],
      },


    }
  },
  //使用表单提交验证
  methods: {
    login(formName) {
      var self =this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
            this.axios.post('/api/login',qs.stringify({
              username: this.user.username,
              password: this.user.password
            }))
              .then(function (response) {
                var result=response.data;
                if(result.code ==200){
                 // alert(result.message);
                  self.$message.success(result.message);
                  //登录成功页面跳转
                  self.$router.push('/foo')
                }else{
                //  alert(result.message);
                  self.$message.error(result.message);
                }
              })
              .catch(function (error) {
                // handle error
                alert("error"+error);
              });

        } else {
          console.log('error submit!!');
          alert('error submit!!');
          return false;
        }
      });
    },
    //重置的不需要
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }

  },
}
</script>

<style lang="scss">
@import "../assets/css/portal-template.css";
</style>
