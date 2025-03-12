import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightsView from '@/views/InsightsView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/insights/',
    name: 'insights',
    component: InsightsView
  },
  {
    path: '/about/',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
