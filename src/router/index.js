// all the existing imports here
import axios from 'axios'
import Router from 'vue-router'

import Home from '../components/HelloWorld.vue'

function createRouter (state) {
  async function beforeEnter (to, from, next) {
    try {
      const { data: user } = await axios.get('/api/me')
      state.user = user
      next()
    } catch (err) {
      console.log('err', err)
      next('/login') // redirect to login if user is not authenticated
    }
  }
  // the function continues in the second panel, not enough space here
  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter // notice this new property
    }
    // the rest of what was already there
  ]

  return new Router({
    routes
  })
}

export default createRouter
