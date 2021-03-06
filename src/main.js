import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosInstance from './util/service'
import './assets/css/global.css'
import './assets/css/fonts/Helvetica/Helvetica.css'
import 'vue-octicon/icons'
import vuePositionSticky from 'vue-position-sticky'
import '@/plugins/Dayjs'
import flashNotif from 'flash-notif'
import '../node_modules/flash-notif/dist/flash-notif.css'

Vue.use(flashNotif, { store })
Vue.use(vuePositionSticky)

Vue.prototype.axios = axiosInstance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
