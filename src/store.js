import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: false
  },
  mutations: {
    login (state) {
      state.islogin = true
    },
    signout (state) {
      state.islogin = false
    }
  },
  actions: {
    // lgoin ({ commit }) {
    //   commit('increment')
    // }
  }
})
