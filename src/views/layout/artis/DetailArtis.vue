<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Layout from "@/components/Layout.vue";
import { artists, albums, songs } from "@/assets/data";

const route = useRoute();
const artistId = Number(route.params.id);

const artist = computed(() => artists.find(a => a.id === artistId));
const artistAlbums = computed(() => albums.filter(a => a.artistId === artistId));
const artistSongs = computed(() => songs.filter(s => s.artistId === artistId));
</script>

<template>
  <Layout>
    <div v-if="artist">

      <!-- HEADER / COVER -->
      <div
        class="p-10 h-96 flex items-end"
        :style="{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${artist.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }"
      >
        <div class="flex items-center gap-6">
          <img
            :src="artist.image"
            class="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <p class="text-sm text-gray-300">Artist</p>
            <h1 class="text-5xl font-bold text-white">
              {{ artist.name }}
            </h1>
            <p class="text-gray-300 mt-2">
              {{ artist.genre }}
            </p>
          </div>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="p-8 text-white">

        <!-- BUTTON -->
        <div class="mb-6 flex gap-4">
          <button class="bg-green-500 px-6 py-2 rounded-full font-semibold hover:bg-green-400">
            Play
          </button>
          <button class="border px-6 py-2 rounded-full">
            Follow
          </button>
        </div>

        <!-- POPULAR SONGS -->
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-4">Popular Songs</h2>
          <div class="space-y-2">
            <div
              v-for="song in artistSongs"
              :key="song.id"
              class="flex justify-between items-center p-3 rounded hover:bg-gray-800"
            >
              <div>
                <p class="font-medium">{{ song.title }}</p>
                <p class="text-sm text-gray-400">{{ song.duration }}</p>
              </div>
              <audio controls :src="song.audio" class="w-40"></audio>
            </div>
          </div>
        </div>

        <!-- ALBUMS -->
        <div>
          <h2 class="text-2xl font-semibold mb-4">Albums</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="album in artistAlbums"
              :key="album.id"
              class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
            >
              <img
                :src="album.cover"
                class="w-full h-40 object-cover rounded mb-2"
              />
              <p class="font-semibold">{{ album.title }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-else class="text-center text-gray-400 p-10">
      Artist tidak ditemukan
    </div>
  </Layout>
</template>

<style scoped>
</style>
