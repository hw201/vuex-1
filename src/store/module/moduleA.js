export default {
  state: {
    name: 'zhangshan'
  },
  mutations: {
    updataname(state, payload) {
      state.name = payload
    }

  },
  actions: {
    upname(context) {
      setTimeout(() => {

        context.commit('updataname', 'wangwu')
      }, 1000)

    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    fullname3(state, getters, rootState) {//rootState根的state 1000
      return getters.fullname2 + rootState.counter
    }
  }
}
