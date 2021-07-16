import Vue from 'vue'
import Router from 'vue-router'
import drag from '@/Pages/Index/drag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'drag',
      component: drag
    }
  ]
})
