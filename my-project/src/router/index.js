import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Test
    },
    {
      path:'/game',
        component:resolve =>{
        require(['../pages/game'],resolve)
      }
    },
    {
      path:'/sport',
        component:resolve =>{
        require(['../pages/sport'],resolve)
      }
    },
    {
      path:'/user',
          component:resolve =>{
        require(['../pages/user'],resolve)
      }
    }

  ]
})
