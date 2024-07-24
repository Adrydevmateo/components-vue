import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/Home.view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@views/Contact.view.vue')
    },
    {
      path: '/quote-generator',
      name: 'quote-generator',
      component: () => import('@modules/quote-generator/Quote-Generator.vue')
    }
  ]
})

export default router
