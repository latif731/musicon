<template>
  <div>
    <Layout>
      <div class="max-w-6xl mx-auto py-10 px-6 text-white">
        <!-- Header -->
        <div class="flex gap-8 items-center mb-10">
          <!-- Cover -->
          <div
            class="w-44 h-44 rounded-2xl bg-gradient-to-br from-purple-900 to-purple-500 flex items-center justify-center"
          >
            <HeartIcon class="w-16 h-16 text-white" />
          </div>

          <!-- Info -->
          <div>
            <p class="text-xs tracking-widest font-semibold">PLAYLIST</p>

            <h1 class="text-6xl font-extrabold mt-2">Liked Songs</h1>

            <p class="text-gray-500 mt-2">
              Alex Johnson • {{ songs.length }} songs • 34 min 12 sec
            </p>

            <!-- Actions -->
            <div class="flex items-center gap-5 mt-5">
              <button
                class="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition"
              >
                <PlayIcon class="w-6" />
              </button>

              <button class="text-gray-600 hover:text-black">
                <ArrowsRightLeftIcon class="w-6" />
              </button>

              <button class="text-gray-600 hover:text-black">
                <EllipsisHorizontalIcon class="w-6" />
              </button>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="rounded-xl max-h-[600px] overflow-y-auto custom-scroll ">
          <table class="w-full text-sm">
            <thead class="text-white  text-xs uppercase bg-[#1F1D2B] border-b border-[#3C4156]">
              <tr>
                <th class="text-left px-6 py-4 w-10 text-white">#</th>
                <th class="text-left px-6 py-4 text-white">Title</th>
                <th class="text-left px-6 py-4 text-white">Album</th>
                <th class="text-left px-6 py-4 w-20">
                  <ClockIcon class="w-4 text-white" />
                </th>
                <th class="px-6 py-4 w-16"></th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(song, i) in songs"
                :key="song.id"
                class="hover:bg-[#2D304D] bg-[#1F1D2B]"
              >
                <td class="px-6 py-4 text-white">
                  {{ i + 1 }}
                </td>

                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img :src="song.cover" class="w-10 h-10 rounded-md" />

                    <div>
                      <p class="font-semibold">
                        {{ song.title }}
                      </p>

                      <p class="text-xs text-gray-500">
                        {{ song.artist }}
                      </p>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 text-white">
                  {{ song.album }}
                </td>

                <td class="px-6 py-4 text-white">
                  {{ song.duration }}
                </td>

                <td class="px-6 py-4 text-center">
                  <HeartIcon class="w-5 text-red-600 cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Layout from "@/components/Layout.vue";
import {
  HeartIcon,
  PlayIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/vue/24/solid";

const songs = ref([
  {
    id: 1,
    title: "Dancing in the Dark",
    artist: "Stella Moon",
    album: "Neon Nights",
    duration: "3:45",
    cover: "https://picsum.photos/50?1",
  },
  {
    id: 2,
    title: "Starlight",
    artist: "The Midnight",
    album: "After Hours",
    duration: "4:12",
    cover: "https://picsum.photos/50?2",
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Ocean Drive",
    album: "Summer Vibes",
    duration: "2:58",
    cover: "https://picsum.photos/50?3",
  },
  {
    id: 4,
    title: "City Lights",
    artist: "Metro Boy",
    album: "Urban Dreams",
    duration: "3:30",
    cover: "https://picsum.photos/50?4",
  },
  {
    id: 5,
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up",
    duration: "4:03",
    cover: "https://picsum.photos/50?5",
  },
  {
    id: 6,
    title: "Crystal",
    artist: "Luna Ray",
    album: "Crystal Skies",
    duration: "3:15",
    cover: "https://picsum.photos/50?6",
  },
  {
    id: 7,
    title: "Neon Pulse",
    artist: "Stella Moon",
    album: "Neon Nights",
    duration: "4:20",
    cover: "https://picsum.photos/50?7",
  },
  {
    id: 8,
    title: "Midnight Sun",
    artist: "Ambient Collective",
    album: "Morning Mist",
    duration: "5:45",
    cover: "https://picsum.photos/50?8",
  },
]);
</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #3C4156;
  border-radius: 999px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #6B7280;
}
</style>
