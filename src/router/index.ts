import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '../views/login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/LocationEmits',
    name: 'Location-emits',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/locationsAlerts.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
