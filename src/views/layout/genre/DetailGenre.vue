<script setup>
import Layout from "@/components/Layout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

/* =========================
   ROUTE
========================= */
const route = useRoute();
const genreName = route.params.name;

/* =========================
   MOCK DATA (sementara)
========================= */
const genres = [
  { id: 1, name: "Metal", color: "from-red-700 to-black" },
  { id: 2, name: "Punk", color: "from-yellow-600 to-black" },
  { id: 3, name: "Alternative", color: "from-green-600 to-black" },
  { id: 4, name: "Grunge", color: "from-purple-600 to-black" },
];

const artists = [
  { id: 1, name: "Metallica", genreIds: [1] },
  { id: 2, name: "Slipknot", genreIds: [1] },
  { id: 3, name: "Avenged Sevenfold", genreIds: [1] },
];

const songs = [
  { id: 1, title: "Enter Sandman", duration: "5:31", genreId: 1 },
  { id: 2, title: "Duality", duration: "4:12", genreId: 1 },
  { id: 3, title: "Hail to the King", duration: "5:05", genreId: 1 },
];

const albums = [
  { id: 1, title: "Black Album", genreId: 1 },
  { id: 2, title: "Iowa", genreId: 1 },
];

/* =========================
   FILTER DATA
========================= */
const currentGenre = computed(() =>
  genres.find((g) => g.name.toLowerCase() === genreName)
);

const genreArtists = computed(() =>
  artists.filter((a) => a.genreIds.includes(currentGenre.value?.id))
);

const genreSongs = computed(() =>
  songs.filter((s) => s.genreId === currentGenre.value?.id)
);

const genreAlbums = computed(() =>
  albums.filter((a) => a.genreId === currentGenre.value?.id)
);

const relatedGenres = computed(() =>
  genres.filter((g) => g.name.toLowerCase() !== genreName)
);
</script>

<template>
  <Layout>
    <div class="text-white">

      <!-- =========================
           HERO SECTION
      ========================== -->
      <div
        class="p-10 bg-gradient-to-b"
        :class="currentGenre?.color || 'from-gray-700 to-black'"
      >
        <h1 class="text-6xl font-bold mb-4 uppercase">
          {{ genreName }}
        </h1>

        <button
          class="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-full font-semibold"
        >
          ▶ Play
        </button>
      </div>

      <div class="p-6">

        <!-- =========================
             TOP ARTISTS
        ========================== -->
        <h2 class="text-xl font-semibold mb-4">Top Artists</h2>
        <div class="flex gap-6 mb-10">
          <div
            v-for="artist in genreArtists"
            :key="artist.id"
            class="text-center"
          >
            <div class="w-32 h-32 bg-gray-700 rounded-full mb-2"></div>
            <p>{{ artist.name }}</p>
          </div>
        </div>

        <!-- =========================
             POPULAR SONGS
        ========================== -->
        <h2 class="text-xl font-semibold mb-4">Popular Songs</h2>
        <div class="space-y-2 mb-10">
          <div
            v-for="song in genreSongs"
            :key="song.id"
            class="flex justify-between items-center p-3 bg-neutral-800 rounded hover:bg-neutral-700 cursor-pointer"
          >
            <span>{{ song.title }}</span>
            <span class="text-gray-400 text-sm">{{ song.duration }}</span>
          </div>
        </div>

        <!-- =========================
             ALBUMS
        ========================== -->
        <h2 class="text-xl font-semibold mb-4">Albums</h2>
        <div class="flex gap-4 mb-10">
          <div
            v-for="album in genreAlbums"
            :key="album.id"
            class="bg-neutral-900 p-4 rounded w-40"
          >
            <div class="h-24 bg-gray-700 rounded mb-2"></div>
            <p class="text-sm">{{ album.title }}</p>
          </div>
        </div>

        <!-- =========================
             RELATED GENRES
        ========================== -->
        <h2 class="text-xl font-semibold mb-4">Related Genres</h2>
        <div class="flex gap-4">
          <router-link
            v-for="genre in relatedGenres"
            :key="genre.id"
            :to="`/genre/${genre.name.toLowerCase()}`"
            class="px-4 py-2 bg-neutral-800 rounded hover:bg-neutral-700"
          >
            {{ genre.name }}
          </router-link>
        </div>

      </div>
    </div>
  </Layout>
</template>