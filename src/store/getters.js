export default {//类似组件的计算属性
  prow(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(s => s.age > 20)//筛选大于20的数组
  },
  more20stuLength(state, getters) {
    return getters.more20stu.length//大于20的个数
  },
  moreAgestu(state) {
    // return function(age){
    //   return state.students.filter(s => s.age > age)
    // }

    return age => {//筛选大于8的
      return state.students.filter(s => s.age > age)
    }
  }
}