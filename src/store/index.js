import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './module/moduleA'


Vue.use(Vuex)


const state = {//保存状态
  counter: 1000,
  students: [
    { id: 10, name: "why", age: 18 },
    { id: 11, name: "hw", age: 30 },
    { id: 12, name: "wyq", age: 24 },
    { id: 13, name: "wzy", age: 10 },
  ],
  info: {
    id: 15, name: 'hss', age: 12
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {//划分模块，
    a: moduleA,
  }
})

export default store
