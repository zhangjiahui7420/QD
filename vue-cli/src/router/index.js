import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import testUrl from '@/components/testUrl'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/test',
      name:'test',
      component:test,
      children:[
        {
          path:'test1',
          name:'test1',
          component:test1
        },{
          path:'test2',
          name:'/test/test2',
          component:test2
        }
      ],

    },{
      path:'/testUrl/:userId(\\d+)/:username',
      component:testUrl,
      name:'testUrl'
    }

  ]
})
