import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'Assets/scss/main.scss'
import 'Assets/css/main.css'
import router from 'Router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
