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
  { id: 1, title: "Nightmare", artist: "Avenged Sevenfold" },
  { id: 2, title: "Hail to the King", artist: "Avenged Sevenfold" },
  { id: 3, title: "Bat Country", artist: "Avenged Sevenfold" },
  { id: 4, title: "Throne", artist: "Bring Me The Horizon" },
  { id: 5, title: "Duality", artist: "Slipknot" },
  { id: 6, title: "Numb", artist: "Linkin Park" },
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
              <div class="w-24 h-24 bg-neutral-700 rounded"></div>

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
                  <div class="w-10 h-10 bg-neutral-700 rounded"></div>

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
              <div class="w-full h-32 bg-neutral-700 rounded-full mb-3"></div>

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