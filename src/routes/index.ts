import { createRouter, createWebHistory } from 'vue-router'

import Generation1 from '@/pages/Generation1.vue'
import Generation2 from '@/pages/Generation2.vue'
import Generation3 from '@/pages/Generation3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'generation1',
      component: Generation1,
    },
    {
      path: '/generation2',
      name: 'geracao2',
      component: Generation2
    },
    {
      path: '/generation3',
      name: 'geracao3',
      component: Generation3
    },
  ],
})

export default router
