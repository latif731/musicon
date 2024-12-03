<script setup>
import Play from "@/assets/PlayerIcons/play.png";
import Shuffle from "@/assets/PlayerIcons/shuffle.png";
import Previous from "@/assets/PlayerIcons/previous.png";
import Next from "@/assets/PlayerIcons/next.png";
import Repeat from "@/assets/PlayerIcons/repeat.png";
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue';
import VolumeMute from 'vue-material-design-icons/VolumeMute.vue';
import liked from "@/assets/PlayerIcons/liked.png"
import share from "@/assets/PlayerIcons/share.png"
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 bg-player text-white h-[110px] p-8 flex items-center"
  >
    <div class="flex flex-col mr-36">
      <h2 class="font-kontol font-[700] text-[20px] text-white">
        No Song Played
      </h2>
      <p class="font-kontol font-[400] text-[12px] text-player">
        Please Choose Any Song You Like To Play
      </p>
    </div>
    <div class="flex flex-col items-center gap-4">
        <div class="flex gap-20 items-baseline">
            <div class=" ml-28 flex items-center gap-4">
              <div>
                <img :src="Shuffle" alt="" />
              </div>
              <div>
                <img :src="Previous" alt="" />
              </div>
              <div>
                <img :src="Play" alt="" />
              </div>
              <div>
                <img :src="Next" alt="" />
              </div>
              <div>
                <img :src="Repeat" alt="" />
              </div>
            </div>
            <div class="ml-20">
                <span>--:--/--:--</span>
            </div>
        </div>
      <div>
        <!-- <div class="flex justify-end mb-1">
            <span>--:--/--:--</span>
        </div> -->
        <div
          class="w-[662px] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mr-28"
        >
          <div
            class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style="width: 45%"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5 mt-5">
      <div class="flex items-center gap-1">
        <div>
          <VolumeHigh/>
        </div>
        <div
            class="w-[150px] bg-gray-200 rounded-full h-1.5 mb-1 dark:bg-gray-700"
          >
            <div
              class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style="width: 45%"
            ></div>
        </div>
      </div>
      <div class="flex gap-2">
        <div>
          <img :src="liked" alt="">
        </div>
        <div>
          <img :src="share" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
