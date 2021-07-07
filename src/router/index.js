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
      name: 'invent',
      component: invent
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    }
  ]
})
