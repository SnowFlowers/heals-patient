import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/routes/Main'
import NotFound from '@/routes/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    Home,
    NotFound
  ]
})
