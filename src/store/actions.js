export default {//异步操作
  // aupdatainfo(context, payload) {//context上下文
  //   setTimeout(() => {
  //     context.commit('xinxi');
  //     console.log(payload.msg);
  //     payload.success()
  //   }, 1000)
  // }

  aupdatainfo(context, payload) {//context上下文
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('xinxi');
        console.log(payload);
        resolve('1111')
      }, 1000)
    })
  }
}