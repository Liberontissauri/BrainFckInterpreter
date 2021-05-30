import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Interpreter from '../views/CodePage.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/interpreter',
    name: 'Interpreter',
    component: Interpreter
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
