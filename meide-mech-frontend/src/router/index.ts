import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import CategoriesSection from '../views/Categories.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/companyprofile',
    name: 'Company Profile',
    component: CompanyProfile
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
