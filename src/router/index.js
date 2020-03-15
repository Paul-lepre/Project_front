import Vue from 'vue'
import VueRouter from 'vue-router'
import Exo from '../components/Exo.vue'
import Home from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  redirect: { name: 'home' },
  routes: [
    {
      path: '/exo',
      name: 'exo',
      component: Exo
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

export default router
