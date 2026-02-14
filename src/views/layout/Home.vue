<script setup>
import Layout from "@/components/Layout.vue";
import Card from "@/components/Card.vue";
import PlaylistCard from "@/components/PlaylistCard.vue";
import Banner from "@/components/Banner.vue";
import Login from "@/views/layout/LoginRegisterPage/Login.vue"
import { ref, watch } from "vue";
import Register from "./LoginRegisterPage/Register.vue";
import Accordion from "@/components/Accordion.vue";

const showLogin = ref(false)
const showRegister = ref(false)

const createPlaylist = ref(true)
const createSuccess = ref(false)


const switchToRegister = () => {
  showLogin.value = false
  showRegister.value = true
}

const switchToLogin = () => {
  showLogin.value = true
  showRegister.value = false
}

watch([showLogin, showRegister], ([login, register]) => {
  if (login || register) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "hidden";
  }
});


</script>

<template>
  <div>
    <Layout>
      <div v-if="showLogin || showRegister">
        <div class= "text-white fixed flex justify-center items-center top-0 left-0 bg-logreg w-x h-y z-50 overflow-auto">
        <!-- LOGIN PAGE -->
        <Login v-if="showLogin" :showLogin="showLogin" @switch-to-register="switchToRegister"/>
        <!-- REGISTER PAGE -->
        <Register v-if="showRegister" :showRegister="showRegister" @switch-to-login="switchToLogin"/>
        </div>
      </div>
      <!-- <div v-if="true"> -->
        <!-- <div class= "text-white fixed flex justify-center items-center top-0 left-0 bg-logreg w-x h-y z-50 overflow-auto"> -->
        <!-- LOGIN PAGE -->
        <!-- <Accordion/> -->
        <!-- REGISTER PAGE -->
        <!-- </div> -->
      <!-- </div> -->
      <div>
        <div v-if="false">
          <h1 class="text-[32px] font-kontol font-[700] text-white">Your Playlist</h1>  
          <div class="mt-8 flex gap-10">
            <PlaylistCard/>
          </div>
        </div>
        <div v-else>
          <Banner/>
        </div>
        <div class="mt-8 w-[1118px]">
          <h1 class="text-[32px] font-kontol font-[700] text-white">New Releases</h1>
          <div class="mt-8 flex gap-10">
            <Card/>
          </div>
        </div>
        <div class="mt-8 w-[1118px]">
          <h1 class="text-[32px] font-kontol font-[700] text-white">Recommended Song</h1>
          <div class="mt-8 flex gap-10">
            <Card/>
          </div>
        </div>
        <div class="mt-8 w-[1118px]">
          <h1 class="text-[32px] font-kontol font-[700] text-white">Popular Artist</h1>
          <div class="mt-8 flex gap-10">
            <Card/>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
