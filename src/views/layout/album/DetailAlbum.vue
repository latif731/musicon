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
import { useRoute } from "vue-router";
import { computed } from "vue";
import { artists, albums, songs } from "@/assets/data";

const route = useRoute();
const artistSlug = route.params.artistSlug;
console.log("artistSlug", artistSlug);
const albumSug = route.params.albumSlug;
console.log("albumSug", albumSug);

const artist = computed(() =>
  artists.find((a) => a.slug === route.params.artistSlug),
);

const album = computed(() =>
  albums.find((a) => a.slug === route.params.albumSlug),
);

const albumSongs = computed(() =>
  songs.filter((s) => s.albumId === album.value?.id),
);

const isValid = computed(() => {
  return album.value?.artistId === artist.value?.id;
});

console.log("artist:", artist.value);
console.log("album:", album.value);
console.log("albumSongs", albumSongs);
</script>

<template>
  <Layout>
    <div class="flex flex-col">
      <h1 class="font-kontol font-700 text-[32px] text-white">
        <!-- Playlist / Anime Collection -->
        {{ album.title }}
      </h1>
      <div class="flex gap-10 items-center mt-10">
        <div
          class="w-[125px] h-[125px] bg-[#1F1D2B] rounded-[8px] flex flex-wrap gap-1"
        >
          <img :src="album?.cover" alt="" />
        </div>
        <div class="w-[595px]">
          <p class="font-kontol font-700 text-white">
            {{ album.description }}
          </p>
          <div class="flex mt-3 gap-5 items-center">
            <p class="text-white">
              By
              <span class="font-kontol text-white font-[700]">{{
                artist.name
              }}</span>
            </p>
            <div
              class="boder border-[#3C4156] rounded-lg w-2 h-2 bg-[#3C4156]"
            ></div>
            <p class="text-[#92929D] font-kontol font-[400]">
              {{ albumSongs.length }}
            </p>
            <div
              class="boder border-[#3C4156] rounded-lg w-2 h-2 bg-[#3C4156]"
            ></div>
            <p class="text-[#92929D] font-kontol font-[400]">
              About 2 hr 12 min
            </p>
          </div>
        </div>
      </div>
      <div
        class="border border-[#1F1D2B] bg-[#1F1D2B] rounded-[8px] w-[185px] h-[107px] absolute right-[110px] top-[180px]"
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
      <div class="flex-grow mt-10">
        <div class="relative shadow-md sm:rounded-lg mt-4">
          <div
            class="max-h-[500px] overflow-y-auto custom-scroll rounded-[8px]"
          >
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
                  <!-- <th scope="col" class="px-6 py-3 text-white normal-case">
                    Artist
                  </th> -->
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    Duration
                  </th>
                  <th scope="col" class="px-6 py-3 text-white normal-case">
                    <span class="text">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody v-if="albumSongs.length">
                <tr
                  v-for="(song, index) in albumSongs"
                  :key="song.id"
                  class="group bg-[#1F1D2B] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#2D304D] dark:hover:bg-gray-600"
                >
                  <th class="px-6 py-4 text-white w-[40px] relative">
                    <!-- ANGKA -->
                    <span class="group-hover:opacity-0 transition duration-200">
                      {{ index + 1 }}
                    </span>

                    <!-- ICON PLAY -->
                    <img
                      :src="play"
                      class="absolute top-1/2 left-[28px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-200 w-4 h-4 cursor-pointer"
                    />
                  </th>
                  <td class="px-1 py-4 flex items-center gap-4 text-white">
                    <img class="w-[40px] h-[40px]" :src="song.image" alt="" />
                    {{ song.title }}
                  </td>
                  <!-- <td class="px-6 py-4 text-white">Jacob Collier</td> -->
                  <td class="px-6 py-4 text-white">
                    {{ song.duration }}
                  </td>
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
                    <!-- <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ><img :src="sampah" alt="" />
                    </a> -->
                  </td>
                </tr>
              </tbody>

              <tbody v-else>
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

<style>
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #3c4156;
  border-radius: 999px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
