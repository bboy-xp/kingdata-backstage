import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/backstage_home'
import Data from '@/components/backstage_data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
  ]
})
