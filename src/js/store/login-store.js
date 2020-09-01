import  Vue from 'vue'
//引入qs
import qs from 'qs';

export default {
  state: {
    isLogin: false,
    user:{
      username: '',
    }

  },
  mutations: {
    login (state,payload) { //登入
      state.isLogin =true;
      state.user.username=payload.username
    },
    logout(state,paload){ //登出
      state.isLogin =false;
      state.user.username=payload.username
    }
  },
  actions:{
    login(context,payload){
      return new Promise((resolve,reject)=>{  //lambda  resolve,reject为回调的方法
        alert('submit!');
        Vue.axios.post('/api/login',qs.stringify(payload))
          .then(function (response) {
            var result=response.data;
            if(result.code ==200){
                //成功的
              resolve(response);
              context.commit('login',payload); //成功才修改状态
            }else{
             //失败的
              reject(response);
            }
          })
          .catch(function (error) {
            var errorData ={
              message:'系统出错'
            }
            reject(errorData);
          });

      })

    }
  },
  getters:{
    getUsername(state){
      return state.user.username;
    }
  }
}
