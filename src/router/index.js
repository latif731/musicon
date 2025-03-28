import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/views/layout/Home.vue'
import CreatePlaylist from '../views/layout/CreatePlaylist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'main_home',
      component: Home
    },
    {
      path: '/createPlaylist',
      name:'create_playlist',
      component: CreatePlaylist
    }
  ]
})

export default router
