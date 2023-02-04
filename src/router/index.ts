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
    path: '/location-emits',
    name: 'Location-emits',
    component: () => import('../views/locationsAlerts.vue')
  },
  {
    path: '/messager-panel',
    name: 'panel-messager',
    component: () => import('../views/panelMessager.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
