<script setup>
import avenged from "@/assets/AvengedSevenfold.jpg";
import BMTH from "@/assets/BringMeToHorizon.jpg";
import slipknot from "@/assets/Slipknot.jpg"
import oned from "@/assets/onedirection.jpg"
import second from "@/assets/secondserenade.jpg"
</script>

<template>
  <div class="w-[199px] h-[280px] rounded-[8px] bg-[#1F1D2B] p-[18px] text-center">
    <img :src="BMTH" alt="" class="w-[160px] h-[160px] rounded-[160px]" />
    <h3 class="text-white pt-5 font-kontol font-[700] text-[20px]">
      Bring Me To The Horizon
    </h3>
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
