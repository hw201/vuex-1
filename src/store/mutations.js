import { INCREMENT } from './mutationstype'

export default {//修改状态,不要异步操作
  //方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  addfive(state, count) {
    state.counter += count
  },
  addstu(state, stu) {
    state.students.push(stu)
  },
  xinxi(state) {
    state.info.name = 'hwy'//替换info的name
    //Vue.set(state.info, 'address', '洛杉矶')//添加address
    //Vue.delete(state.info, 'age')//删掉age
  }
}