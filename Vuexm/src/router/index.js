import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import two from '@/components/two'
import three from '@/components/three'
import foree from '@/components/foree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'Header',
      component: Header
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/foree',
      name: 'foree',
      component: foree
    }
  ]
})
