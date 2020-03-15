import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import VueRouter from 'vue-router'

import Exo from './components/Exo.vue'
import Home from './components/HelloWorld.vue'

// this line allows sending cookies to http://localhost:3000

axios.defaults.withCredentials = true // this line here !

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/exo',
      name: 'exo',
      component: Exo
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
