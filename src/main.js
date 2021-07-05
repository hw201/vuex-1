import Vue from 'vue'
import App from './App'
import store from './store'


Vue.config.productionTip = false

//Vue.prototype.$store=store,所以任何组件都可以用$store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
