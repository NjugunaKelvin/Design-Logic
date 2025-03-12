import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightsView from '@/views/InsightsView.vue'
import AboutView from '@/views/AboutView.vue'
import ResourcesView from '@/views/ResourcesView.vue'

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
  },
  {
    path: '/resources/',
    name: 'resources',
    component: ResourcesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
