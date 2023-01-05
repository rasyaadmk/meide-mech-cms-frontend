import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import CategoriesSection from '../views/Categories.vue'
import CarouselSection from '../views/Carousel.vue'
import FooterSection from '../views/Footer.vue'
import ApiTest from '../views/apiTest.vue'
import IndexSection from '../views/index.vue'
import CategoriesSectionApi from '../views/categoryapi.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: IndexSection
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
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: CarouselSection
  }
  ,
  {
    path: '/footer',
    name: 'Footer',
    component: FooterSection
  },
  {
    path: '/apitest',
    name: 'Api Test',
    component: ApiTest
  },
  {
    path: '/apicategory',
    name: 'Api Category',
    component: CategoriesSectionApi
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
