// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import CarDetail from '@/pages/CarDetail.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Resources from '@/pages/Resources.vue'
// ensure this catch-all Not Found page is the last entry in the 'routes' array.
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'CarDetail',
    component: CarDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  
  {
    path: '/:pathMatch(.*)*', // Catch-all route 
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
