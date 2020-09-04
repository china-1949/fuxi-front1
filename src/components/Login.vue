<template>
  <portal-template>
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

        <router-link to="/register"><el-button type="text"  class="el-icon-edit">去注册</el-button></router-link>
      </div>

  </portal-template>
</template>

<script>
  //引入组件
  import PortalTemplate from './PortalTemplate'

export default {
  name: 'login',
  components:{
    PortalTemplate
  },
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

          //登录状态
          self.$store.dispatch('login',{username:self.user.username,password:self.user.password})
            .then((response)=>{ //成功的
              self.$message.success(response.data.message);
              //登录成功页面跳转
              self.$router.push('/home/course/list')
            })
            .catch((response)=>{ //错误的
              self.$message.error(response.data.message);
            })
        } else {
         // console.log('error submit!!');
         // alert('error submit!!');
          this.$message.error('error submit!!');
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
</style>
