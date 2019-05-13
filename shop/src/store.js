import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      userName:'未登录'
    }
  },
  //相似于methous
  getters:{

  },
  //改变state里面数据的唯一途径，
  //不能处理异步操作
  mutations: {
    changeLogin(state,status){
      state.userInfo = status;
    }
  },
  //可以处理异步操作
  actions: {
    loginAction({commit}, user){
        commit('changeLogin', user)
    }
  }
})
