<script setup>
import Layout from "@/components/Layout.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

/* ROUTER */
const route = useRoute();

/* STATE */
const loading = ref(false);
const results = ref([]);

/* DATA SEMENTARA */
const songs = [
  { id: 1, title: "Nightmare", artist: "Avenged Sevenfold", img:"https://i.pinimg.com/1200x/35/cd/71/35cd71c65df90a4d9a1b2e86668ebafd.jpg" },
  { id: 2, title: "Hail to the King", artist: "Avenged Sevenfold", img:"https://i.pinimg.com/1200x/e3/08/bd/e308bd9e51213466036abb3da96ab553.jpg" },
  { id: 3, title: "Bat Country", artist: "Avenged Sevenfold",img:"https://i.pinimg.com/736x/75/a9/70/75a9705af53ba0f96c892fe0ccf7b3b4.jpg" },
  { id: 4, title: "Throne", artist: "Bring Me The Horizon",img:"https://i.pinimg.com/736x/12/a4/3d/12a43d9937e05a2d5e221c976b53be7c.jpg" },
  { id: 5, title: "Duality", artist: "Slipknot", img:"https://i.pinimg.com/1200x/55/b9/12/55b912f329b5d090257f90dc8aae8e09.jpg" },
  { id: 6, title: "Numb", artist: "Linkin Park", img:"https://i.pinimg.com/1200x/75/d6/13/75d613483c28575a1bae2c36b674de41.jpg" },
];

/* SEARCH */
const searchSongs = (query) => {
  loading.value = true;

  setTimeout(() => {
    results.value = songs.filter((song) =>
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.title.toLowerCase().includes(query.toLowerCase())
    );

    loading.value = false;
  }, 400);
};

/* WATCH QUERY */
watch(
  () => route.query.q,
  (query) => {
    if (query) {
      searchSongs(query);
    } else {
      results.value = [];
    }
  },
  { immediate: true }
);

/* TOP RESULT */
const topResult = () => {
  return results.value[0];
};
</script>

<template>
  <Layout>
    <div class="p-8 text-white">

      <h1 class="text-2xl font-bold mb-8">
        Search results for "{{ route.query.q }}"
      </h1>

      <!-- LOADING -->
      <div v-if="loading" class="grid grid-cols-2 gap-8">
        <div class="h-56 bg-neutral-800 animate-pulse rounded-lg"></div>
        <div class="h-56 bg-neutral-800 animate-pulse rounded-lg"></div>
      </div>

      <div v-else>

        <!-- TOP RESULT + SONGS -->
        <div class="grid grid-cols-2 gap-8 mb-12">

          <!-- TOP RESULT -->
          <div v-if="topResult()" class="bg-neutral-900 p-6 rounded-lg hover:bg-neutral-800 transition">
            <h2 class="text-xl font-bold mb-4">Top Result</h2>

            <div class="flex items-center gap-4">
              <div class="w-24 h-24 bg-neutral-700 rounded">
                <img src="https://i.pinimg.com/736x/a4/bc/7b/a4bc7b7e74fc8b7f99ad2b407496e73c.jpg" alt="">
              </div>

              <div>
                <h3 class="text-2xl font-bold">
                  {{ topResult().artist }}
                </h3>

                <p class="text-sm text-gray-400">
                  Artist
                </p>
              </div>
            </div>
          </div>

          <!-- SONG LIST -->
          <div>
            <h2 class="text-xl font-bold mb-4">Songs</h2>

            <div class="space-y-3">
              <div
                v-for="song in results.slice(0,5)"
                :key="song.id"
                class="flex items-center justify-between p-3 rounded hover:bg-neutral-800 transition cursor-pointer"
              >
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-neutral-700 rounded">
                    <img :src="song.img" alt="">
                  </div>

                  <div>
                    <p class="text-sm font-medium">
                      {{ song.title }}
                    </p>

                    <p class="text-xs text-gray-400">
                      {{ song.artist }}
                    </p>
                  </div>
                </div>

                <p class="text-sm text-gray-400">
                  3:45
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- ARTISTS -->
        <div class="mb-12">
          <h2 class="text-xl font-bold mb-5">Album</h2>

          <div class="grid grid-cols-5 gap-5">
            <div
              v-for="song in results"
              :key="song.id"
              class="bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition"
            >
              <div class="w-full h-32 bg-neutral-700 rounded-full mb-3">
                <img :src="song.img" alt="" class="object-cover h-32 w-full  rounded-full">
              </div>

              <h3 class="text-sm font-semibold text-center">
                {{ song.artist }}
              </h3>
            </div>
          </div>
        </div>

      </div>

      <!-- NO RESULT -->
      <div
        v-if="!loading && results.length === 0"
        class="text-gray-400 mt-16 text-center"
      >
        No results found
      </div>

    </div>
  </Layout>
</template>