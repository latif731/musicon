import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/views/layout/Home.vue'
import CreatePlaylist from '@/views/layout/PlaylistCreate/CreatePlaylist.vue'
import PlaylistList from '@/views/layout/PlaylistCreate/PlaylistList.vue'
import CreatePlaylistHome from '@/views/layout/PlaylistCreate/CreatePlaylistHome.vue'

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
      component: CreatePlaylistHome,
      children:[
        {
          path:"", // default halaman utama create playlist
          name:'create_playlist',
          component: CreatePlaylist
        },
        {
          path:"list",
          name:"playlist_list",
          component:PlaylistList
        }
      ]
    },
  ]
})

export default router
