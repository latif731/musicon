import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "@/views/layout/Home.vue";
import CreatePlaylist from "@/views/layout/PlaylistCreate/CreatePlaylist.vue";
import PlaylistList from "@/views/layout/PlaylistCreate/PlaylistList.vue";
import CreatePlaylistHome from "@/views/layout/PlaylistCreate/CreatePlaylistHome.vue";
import Playlist from "@/views/layout/playlist/Playlist.vue";
import PlaylistCollection from "@/views/layout/playlist/PlaylistCollection.vue";
import PlaylistHome from "@/views/layout/playlist/PlaylistHome.vue";
import Profile from "@/views/layout/MyProfile/Profile.vue";
import Account from "@/views/layout/MyProfile/Account.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      name: "main_home",
      component: Home,
    },
    {
      path: "/createPlaylist",
      component: CreatePlaylistHome,
      children: [
        {
          path: "", // default halaman utama create playlist
          name: "create_playlist",
          component: CreatePlaylist,
        },
        {
          path: "list",
          name: "playlist_list",
          component: PlaylistList,
        },
      ],
    },
    {
      path: "/playlist",
      component: PlaylistHome,
      children: [
        {
          path: "",
          name: "playlist",
          component: Playlist,
        },
        {
          path: "collection",
          name: "playlist_collection",
          component: PlaylistCollection,
        },
      ],
    },
    {
      path: "/profile",
      name: "main_profile",
      component: Profile,
    },
    {
      path: "/account",
      name: "main_account",
      component: Account,
    },
  ],
});

export default router;
