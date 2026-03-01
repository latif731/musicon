<script setup>
import avenged from "@/assets/AvengedSevenfold.jpg";
import { ref } from "vue";
import BMTH from "@/assets/BringMeToHorizon.jpg";
import slipknot from "@/assets/Slipknot.jpg"
import oned from "@/assets/onedirection.jpg"
import second from "@/assets/secondserenade.jpg"
import play from "@/assets/PlayerIcons/play.png"

const currentArtist = ref(false)

const togglePLay = () => {
  currentArtist.value = !currentArtist.value
}

</script>

<template>
  <div @click="togglePLay" class="w-[199px] h-[280px] rounded-[8px] p-[18px] text-center" :class="currentArtist ? 'bg-[#2D304D]' : 'bg-[#1F1D2B]'" >
    <img :src="BMTH" alt="" class="w-[160px] h-[160px] rounded-[160px]" />
    <h3 class="text-white pt-5 font-kontol font-[700] text-[20px]">
      Bring Me To The Horizon
    </h3>
    <img :src="play" alt="" class="relative w-[40px] h-[40px] bottom-32 left-[120px]" v-if="currentArtist">    
  </div>
  <div class="w-[199px] h-[280px] rounded-[8px] bg-[#1F1D2B] p-[18px] text-center">
    <img :src="avenged" alt="" class="w-[160px] h-[160px] rounded-[160px]" />
    <h3 class="text-white pt-5 font-kontol font-[700] text-[20px]">
      Avengend Sevenfold
    </h3>
  </div>
  <div class="w-[199px] h-[280px] rounded-[8px] bg-[#1F1D2B] p-[18px] text-center">
    <img :src="slipknot" alt="" class="w-[160px] h-[160px] rounded-[160px]" />
    <h3 class="text-white pt-5 font-kontol font-[700] text-[20px]">
      Slipknot
    </h3>
  </div>
  <div class="w-[199px] h-[280px] rounded-[8px] bg-[#1F1D2B] p-[18px] text-center">
    <img :src="oned" alt="" class="w-[160px] h-[160px] rounded-[160px]" />
    <h3 class="text-white pt-5 font-kontol font-[700] text-[20px]">
      One Direction 
    </h3>
  </div>
  <div class="w-[199px] h-[280px] rounded-[8px] bg-[#1F1D2B] p-[18px] text-center">
    <img :src="second" alt="" class="w-[160px] h-[160px] rounded-[160px]" />
    <h3 class="text-white pt-5 font-kontol font-[700] text-[20px]">
      Secondhand Serenade
    </h3>
  </div>
</template>

<style lang="scss" scoped></style>
