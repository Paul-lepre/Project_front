import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import createRouter from './router/index.js'
const state = {
  user: {}
}

// this line allows sending cookies to http://localhost:3000

axios.defaults.withCredentials = true // this line here !

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  data: state,
  router: createRouter(state),
  vuetify,
  render: h => h(App)
}).$mount('#app')
