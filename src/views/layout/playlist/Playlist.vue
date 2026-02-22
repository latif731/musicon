<script setup>
import Layout from "@/components/Layout.vue";
import PlaylistCard from "@/components/PlaylistCard.vue";
import platlist1 from "@/assets/playlist1.png";
import platlist2 from "@/assets/playlist2.png";
import platlist3 from "@/assets/playlist3.png";
import platlist4 from "@/assets/playlist4.png";
import star from "@/assets/star.png";
import titik from "@/assets/titik.png";
import strip from "@/assets/strip.png";
</script>

<template>
  <div class="text-white font-kontol font-[700] text-[32px]">
    <h1>PLaylist</h1>
  </div>
  <div class="flex mt-20 flex-wrap gap-11">
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700] w-[210px]">
          Jazz Collection
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <p class="text-white">4.5</p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700] w-[210px]">
          Anime Collection
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700] w-[210px]">
          Dangdut Mantap
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5
          class="text-white font-kontol text-[24px] font-[700] w-52 truncate ..."
        >
          Covid Cepat Berakhir
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700]">
          Jazz Collection
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700]">
          Jazz Collection
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700]">
          Jazz Collection
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="w-[246px] h-[246px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap p-6 gap-1"
      >
        <div class="w-[96px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[96px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="pt-5 flex flex-col items-center">
        <h5 class="text-white font-kontol text-[24px] font-[700]">
          Jazz Collection
        </h5>
        <div class="flex gap-3 items-center">
          <h6 class="text-[#92929D] font-kontol font-[700] text-[16px]">
            By Naruto Sasuke
          </h6>
          <!-- <div class="w-[20px] border border-[#92929D]"></div> -->
          <img :src="titik" alt="" class="w-[4px] h-[4px] mt-1" />
          <img :src="star" alt="" />
          <div v-if="false">
            <p class="text-white">4.5</p>
          </div>
          <div v-if="true" class="mt-1">
            <img :src="strip" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
