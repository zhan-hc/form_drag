import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/Pages/Index/index'
import invent from '@/Pages/Index/invent'
import drag from '@/Pages/Index/drag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'drag',
      component: drag
    },
    {
      path: '/invent',
      name: 'invent',
      component: invent
    }
  ]
})
