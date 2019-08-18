import Vue from 'vue'
import Router from 'vue-router'
import main from './components/main'
import author from './components/author'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/author',
      name: 'author',
      component: author
    }
  ]
})
