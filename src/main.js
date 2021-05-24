import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
