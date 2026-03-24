<script setup>
import { ref, computed } from "vue";
import { useRouter, RouterLink } from "vue-router";
import Layout from "@/components/Layout.vue";

const router = useRouter();

const selectedFilter = ref("All");
const sortType = ref("default");
const viewMode = ref("grid");

const filters = ["All", "Trending", "Popular", "New"];

const genres = ref([
  {
    name: "Pop",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1678899174068-d576b01a3b4c?q=80&w=400",
  },
  {
    name: "Rock",
    category: "Trending",
    image:
      "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400",
  },
  {
    name: "Jazz",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400",
  },
  {
    name: "Hip Hop",
    category: "Trending",
    image:
      "https://images.unsplash.com/photo-1583022312757-2d9b628ef788?q=80&w=400",
  },
  {
    name: "Electronic",
    category: "New",
    image:
      "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?q=80&w=400",
  },
  {
    name: "Lo-fi",
    category: "New",
    image:
      "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400",
  },
  {
    name: "Indie",
    category: "Trending",
    image:
      "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400",
  },
  {
    name: "Classical",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1759306725469-ce04b6600540?q=80&w=400",
  },
  {
    name: "R&B",
    category: "Trending",
    image:
      "https://images.unsplash.com/photo-1562065417-7b776d5b9c4a?q=80&w=400",
  },
  {
    name: "Country",
    category: "New",
    image:
      "https://images.unsplash.com/photo-1717769165971-c81dfab13a1c?q=80&w=400",
  },
  {
    name: "Blues",
    category: "Popular",
    image:
      "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400",
  },
]);

/* FILTER */

const filteredGenres = computed(() => {
  if (selectedFilter.value === "All") return genres.value;

  return genres.value.filter((g) => g.category === selectedFilter.value);
});

/* SORT */

const sortedGenres = computed(() => {
  let data = [...filteredGenres.value];

  if (sortType.value === "az") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortType.value === "za") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }

  return data;
});

const goBack = () => {
  router.back();
};
</script>

<template>
  <Layout>
    <div class="p-8 pb-24">
      <!-- BACK -->

      <button
        @click="goBack"
        class="flex items-center gap-2 text-white hover:text-gray-300 mb-6"
      >
        ← Back
      </button>

      <!-- HEADER -->

      <div class="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 class="text-5xl text-white font-black">All Genres</h1>
          <p class="text-gray-400">{{ sortedGenres.length }} items available</p>
        </div>

        <!-- CONTROL -->

        <div class="flex items-center gap-3 flex-wrap">
          <!-- FILTER -->

          <div class="flex gap-2">
            <button
              v-for="filter in filters"
              :key="filter"
              @click="selectedFilter = filter"
              :class="[
                'px-4 py-1 rounded-full border border-black text-sm',
                selectedFilter === filter
                  ? 'bg-zinc-600 text-white'
                  : 'bg-white',
              ]"
            >
              {{ filter }}
            </button>
          </div>

          <!-- SORT -->

          <select
            v-model="sortType"
            class="border rounded-full border-white px-3 py-1 text-sm"
          >
            <option value="default">Sort</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>

          <!-- VIEW TOGGLE -->

          <div class="flex border rounded-full overflow-hidden">
            <button
              @click="viewMode = 'grid'"
              class="px-3 py-1 text-sm"
              :class="
                viewMode === 'grid' ? 'bg-zinc-400 text-white' : 'text-white'
              "
            >
              Grid
            </button>

            <button
              @click="viewMode = 'list'"
              class="px-3 py-1 text-sm"
              :class="
                viewMode === 'list' ? 'bg-zinc-400 text-white' : 'text-white'
              "
            >
              List
            </button>
          </div>
        </div>
      </div>

      <!-- GRID MODE (FLEXBOX) -->

      <div v-if="viewMode === 'grid'" class="flex flex-wrap gap-6 mt-10">
        <div v-for="genre in sortedGenres" :key="genre.name" class="w-[180px]">
          <RouterLink
          :to="`/genre/${genre.name.toLowerCase().replace(/\\s+/g, '-')}`"
          >
            <div
              class="relative rounded-3xl overflow-hidden cursor-pointer group shadow"
            >
              <img
                :src="genre.image"
                class="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div
                class="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <h3 class="text-white text-xl font-bold">
                  {{ genre.name }}
                </h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- LIST MODE -->

      <div v-else class="flex flex-col gap-3 mt-8">
        <div
          v-for="genre in sortedGenres"
          :key="genre.name"
          class="flex items-center gap-4 border border-black bg-black p-4 rounded-xl"
        >
          <img :src="genre.image" class="w-14 h-14 rounded object-cover" />

          <div class="flex flex-col">
            <h3 class="font-bold text-white">
              {{ genre.name }}
            </h3>

            <span class="text-sm text-gray-400">
              {{ genre.category }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
