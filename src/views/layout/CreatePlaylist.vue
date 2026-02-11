<script setup>
import Layout from "@/components/Layout.vue";
import toggle from "@/assets/toggle.png";
import music_1 from "@/assets/music1.png";
import search from "@/assets/icons/search.png";
</script>

<template>
  <Layout>
    <div class="flex flex-col h-screen">
      <h1 class="font-kontol font-700 text-[32px] text-white">
        Created Playlist / Anime Songs
      </h1>
      <div class="flex mt-6 gap-20">
        <div class="flex gap-4 items-center">
          <img class="w-[120px] h-[120px]" :src="music_1" alt="" />
          <div class="w-[595px]">
            <p class="font-kontol font-700 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem eveniet optio, consectetur, est earum tempore at, sed quod
              dolorem voluptate id obcaecati eaque perspiciatis adipisci
              nesciunt! Sed, mollitia repellendus!
            </p>
          </div>
        </div>
        <div>
          <img :src="toggle" alt="" />
        </div>
      </div>
      <div class="flex justify-end" v-if="true">
        <button class="p-2 bg-[#FFFFFF] rounded-lg w-[190px]">
          + Add Song
        </button>
      </div>
      <div class="flex justify-end" v-if="false">
        <button class="p-2 bg-[#FFFFFF] rounded-lg w-[190px]">Close</button>
      </div>
      <div class="max-h-[320px] bg-[#1F1D2B] pb-5 pl-2 pt-2 pr-2 mt-5">
        <h2 class="text-white font-[500] text-[18px] font-kontol p-3">
          Let’s find song for your playlist
        </h2>
        <div
          class="bg-[#3C4156] h-[41px] w-[396px] relative ml-[11px] mb-3 pl-6 rounded-[4px] flex items-center gap-3 shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]"
        >
          <div>
            <img :src="search" alt="" class="w-[20px] h-[20px] mt-1" />
          </div>
          <input
            type="text"
            class="w-[396px] outline-none pl-2 bg-[#3C4156] rounded-[8px] text-white"
            placeholder="search"
          />
        </div>
        <div class="flex flex-col "> 
          <div class="flex"></div>
          <div class="flex"></div>
          <div class="flex"></div>
        </div>
      </div>
      <div class="flex-grow">
        <div class="relative shadow-md sm:rounded-lg mt-4">
          <div class="max-h-[320px] overflow-y-auto">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll"
            >
              <thead
                class="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-[#1F1D2B] border-b border-[#3C4156]"
              >
                <tr>
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    No
                  </th>
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
              <tbody v-if="false">
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    3
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    3
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    3
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-[0px] whitespace-nowrap text-white dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Moon River
                  </td>
                  <td class="px-6 py-4 text-white">Jacob Collier</td>
                  <td class="px-6 py-4 text-white">02.35</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white w-[0px] whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Hollow
                  </td>
                  <td class="px-6 py-4 text-white">Final Fantasi</td>
                  <td class="px-6 py-4 text-white">04.51</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-[#1F1D2B] dark:bg-gray-800 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    3
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="music_1" alt="" />
                    Jazz & Chill
                  </td>
                  <td class="px-6 py-4 text-white">Joe Pass</td>
                  <td class="px-6 py-4 text-white">03.59</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
              <tbody v-if="true">
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
      </div>
    </div>
  </Layout>
</template>
