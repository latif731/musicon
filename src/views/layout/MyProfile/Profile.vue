<script setup>
import Layout from "@/components/Layout.vue";
import foto from "@/assets/profile1.jpg";
import ArtistCard from "@/components/ArtistCard.vue";
import Accordion from "@/components/Accordion.vue";
import sampah from "@/assets/sampah.png";
import like from "@/assets/love.png";
import share from "@/assets/share.png";
import play from "@/assets/PlayerIcons/play.png";
import stop from "@/assets/stop.png";
import music_1 from "@/assets/music1.png";
import platlist1 from "@/assets/playlist1.png";
import platlist2 from "@/assets/playlist2.png";
import platlist3 from "@/assets/playlist3.png";
import platlist4 from "@/assets/playlist4.png";
</script>

<template>
  <Layout>
    <div class="text-white font-kontol font-[700] text-[32px]">
      <h1>Profile</h1>
    </div>
    <div class="p-9 flex items-center gap-10 border-b border-b-[#3C4156]">
      <img :src="foto" alt="" class="w-[160px] h-[160px] rounded-[180px]" />
      <div class="flex flex-col gap-5">
        <h6 class="text-white">Full Name</h6>
        <input
          type="text"
          name=""
          id=""
          class="w-[396px] h-[43px] rounded-[4px] bg-[#1F1D2B] text-white pl-[10px] border focus:outline-none border-[#1F1D2B]"
        />
        <div class="flex gap-5">
          <p class="text-[#E2E2EA]">20 Playlist Created</p>
          <p class="text-[#E2E2EA]">1.921 Songs Liked</p>
        </div>
      </div>
      <div class="flex">
        <div v-if="false">
          <button class="text-black bg-white w-[142px] rounded-[4px] h-[43px]">Edit Name</button>
        </div>
        <div class="flex gap-3" v-if="true">
            <button class="text-white bg-[#92929D] w-[142px] rounded-[20px] h-[43px]">Cancel</button>
            <button class="text-white bg-gradient-to-r from-right to-left w-[142px] rounded-[20px] h-[43px]">Edit Name</button>
        </div>
      </div>
    </div>
    <div class="border-b border-b-[#3C4156] pb-16">
      <div class=" pt-9 flex justify-between">
        <h1 class="text-white font-kontol font-[700] text-[32px]">Your Top Artist</h1>
        <p class="font-kontol font-[700] text-[20px] text-[#92929D]">See All</p>
      </div>
      <div class="flex pt-5 gap-11">
        <ArtistCard/>
      </div>
    </div>
    <div>
      <div class=" pt-9 flex justify-between">
        <h1 class="text-white font-kontol font-[700] text-[32px]">Your Top Songs This Month</h1>
        <p class="font-kontol font-[700] text-[20px] text-[#92929D]">See All</p>
      </div>
      <div class="flex-grow mt-10">
        <div class="relative shadow-md sm:rounded-lg mt-4">
          <div class="max-h-[500px] overflow-y-auto">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll"
            >
              <thead
                class="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-[#1F1D2B] border-b border-[#3C4156]"
              >
                <tr>
                  <th scope="col" class="px-6 py-3 text-white normal-case">No</th>
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    Artist
                  </th>
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    Duration
                  </th>
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    <span class="text">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody v-if="true">
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    <div v-if="false">1</div>
                    <div v-if="false">
                      <img :src="play" alt="" />
                    </div>
                    <div v-if="true">
                      <img :src="stop" alt="" />
                    </div>
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4 flex items-center gap-2">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="like" alt="" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="share" alt="" class="w-6" />
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a>
                  </td>
                </tr>
              </tbody>
  
              <tbody v-if="false">
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <td colspan="5" class="text-center py-10 text-gray-400">
                    Let’s Find Song for Your Playlist,<br />
                    Please Click Add Song to Add New Song
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="text-center mt-8">
          <!-- <button class="p-2 bg-[#FFFFFF] rounded-lg w-[500px]">+ Create</button> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped></style>
