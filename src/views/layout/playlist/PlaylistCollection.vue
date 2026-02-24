<script setup>
import Layout from "@/components/Layout.vue";
import toggle from "@/assets/toggle.png";
import music_1 from "@/assets/music1.png";
import search from "@/assets/icons/search.png";
import playlist_1 from "@/assets/playlist1.png";
import playlist_2 from "@/assets/playlist2.png";
import playlist_3 from "@/assets/playlist3.png";
import Accordion from "@/components/Accordion.vue";
import sampah from "@/assets/sampah.png";
import like from "@/assets/love.png";
import share from "@/assets/share.png";
import play from "@/assets/PlayerIcons/play.png";
import stop from "@/assets/stop.png";
import platlist1 from "@/assets/playlist1.png";
import platlist2 from "@/assets/playlist2.png";
import platlist3 from "@/assets/playlist3.png";
import platlist4 from "@/assets/playlist4.png";
</script>

<template>
  <div v-if="false">
    <div
      class="text-white fixed flex justify-center items-center top-0 left-0 bg-logreg w-x h-y z-10 overflow-auto"
    >
      <!-- LOGIN PAGE -->
      <Accordion />
      <!-- REGISTER PAGE -->
    </div>
  </div>
  <div class="flex flex-col">
    <h1 class="font-kontol font-700 text-[32px] text-white">
      Playlist / Anime Collection
    </h1>
    <div class="flex gap-10 items-center mt-10">
      <div
        class="w-[125px] h-[125px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap gap-1"
      >
        <div class="w-[60px]">
          <img :src="platlist1" alt="" />
        </div>
        <div class="w-[60px]">
          <img :src="platlist2" alt="" />
        </div>
        <div class="w-[60px]">
          <img :src="platlist3" alt="" />
        </div>
        <div class="w-[60px]">
          <img :src="platlist4" alt="" />
        </div>
      </div>
      <div class="w-[595px]">
        <p class="font-kontol font-700 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          autem eveniet optio, consectetur, est earum tempore at, sed quod
          dolorem voluptate id obcaecati eaque perspiciatis adipisci nesciunt!
          Sed, mollitia repellendus!
        </p>
        <div class="flex mt-3 gap-5 items-center">
          <p class="text-white">
            By
            <span class="font-kontol text-white font-[700]"
              >Irham Raziqony</span
            >
          </p>
          <div
            class="boder border-[#3C4156] rounded-lg w-2 h-2 bg-[#3C4156]"
          ></div>
          <p class="text-[#92929D] font-kontol font-[400]">15 Songs</p>
          <div
            class="boder border-[#3C4156] rounded-lg w-2 h-2 bg-[#3C4156]"
          ></div>
          <p class="text-[#92929D] font-kontol font-[400]">About 2 hr 12 min</p>
        </div>
      </div>
    </div>
    <div
      class="border border-[#1F1D2B] bg-[#1F1D2B] rounded-[8px] w-[185px] h-[107px] absolute right-[150px] top-[180px]"
    >
      <p
        class="font-kontol font-[700] text-[20px] border-b border-b-[#3C4156] text-white pt-4 pb-3 text-center"
      >
        Give Rating
      </p>
      <div class="text-center pt-2">
        <div class="inline-flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="flex justify-end" v-if="true">
      <button class="p-2 bg-[#FFFFFF] rounded-lg w-[190px]">+ Add Song</button>
    </div> -->
    <!-- <div class="flex justify-end" v-if="false">
      <button class="p-2 bg-[#FFFFFF] rounded-lg w-[190px]">Close</button>
    </div> -->
    <!-- <div class="bg-[#1F1D2B] pb-5 pl-2 pt-2 pr-2 mt-5">
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
      <div class="flex flex-col p-6 gap-5">
        <div class="flex justify-between">
          <div class="flex gap-5">
            <img :src="playlist_2" alt="" class="w-[49px] h-[50px]" />
            <div class="flex flex-col">
              <h3 class="text-[20px] font-kontol font-[700] text-white">
                Moon River
              </h3>
              <p class="text-[12px] font-kontol font-[700] text-[#92929D]">
                Jacob Collier
              </p>
            </div>
          </div>
          <button
            class="bg-[#92929D] rounded-[20px] w-[142px] h-[43px] hover:bg-[#4399FD] transition duration-300 text-white font-kontol font-[700]"
          >
            Add
          </button>
        </div>
        <div class="flex justify-between">
          <div class="flex gap-5">
            <img :src="playlist_2" alt="" class="w-[49px] h-[50px]" />
            <div class="flex flex-col">
              <h3 class="text-[20px] font-kontol font-[700] text-white">
                Moon River
              </h3>
              <p class="text-[12px] font-kontol font-[700] text-[#92929D]">
                Jacob Collier
              </p>
            </div>
          </div>
          <button
            class="bg-[#92929D] rounded-[20px] w-[142px] h-[43px] hover:bg-[#4399FD] transition duration-300 text-white font-kontol font-[700]"
          >
            Add
          </button>
        </div>
        <div class="flex justify-between">
          <div class="flex gap-5">
            <img :src="playlist_2" alt="" class="w-[49px] h-[50px]" />
            <div class="flex flex-col">
              <h3 class="text-[20px] font-kontol font-[700] text-white">
                Moon River
              </h3>
              <p class="text-[12px] font-kontol font-[700] text-[#92929D]">
                Jacob Collier
              </p>
            </div>
          </div>
          <button
            class="bg-[#92929D] rounded-[20px] w-[142px] h-[43px] hover:bg-[#4399FD] transition duration-300 text-white font-kontol font-[700]"
          >
            Add
          </button>
        </div>
      </div>
    </div> -->
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
</template>
