import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Interpreter from '../views/CodePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/interpreter',
    name: 'Interpreter',
    component: Interpreter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
