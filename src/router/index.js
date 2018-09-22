import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Foo',
      name: 'Foo1',
      component: Foo
    },
    {
      path: '/Bar',
      name: 'Bar1',
      component: Bar
    }
  ]
})
