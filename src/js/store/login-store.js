export default {
  state: {
    username: 'a'
  },
  mutations: {
    changeUsername (state,payload) {
      state.username=payload.username
    }
  },
  actions:{
    changeMyUsername(context,payload){
      context.commit('changeUsername',payload);
    }
  },
  getters:{
    getUsername(state){
      return state.username
    }
  }
}
