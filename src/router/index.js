import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import About from '@/components/About'
import AboutTimeline from '@/components/AboutTimeline'

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
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/AboutTimeline',
      name: 'AboutTimeline',
      component: AboutTimeline
    }

    
  ]
})
