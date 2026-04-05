<script setup>
import Layout from "@/components/Layout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { genres, artists, albums, songs } from "@/assets/data";
console.log("import genres", genres)
/* =========================
   ROUTE
========================= */
const route = useRoute();
const genreName = route.params.name?.toLowerCase();
console.log("genreName",genreName)

/* =========================
   MOCK DATA (sementara)
========================= */
/* =========================
   GENRES
========================= */
// const genres = [
//   {
//     id: 1,
//     name: "metal",
//     displayName: "Metal",
//     color: "from-red-700 to-black",
//     banner: "https://i.pinimg.com/1200x/72/8e/63/728e638e5a0dfd85e2554a2554854297.jpg",
//   },
//   {
//     id: 2,
//     name: "punk",
//     displayName: "Punk",
//     color: "from-yellow-600 to-black",
//     banner: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
//   },
//   {
//     id: 3,
//     name: "alternative",
//     displayName: "Alternative",
//     color: "from-green-600 to-black",
//     banner: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
//   },
//   {
//     id: 4,
//     name: "grunge",
//     displayName: "Grunge",
//     color: "from-purple-600 to-black",
//     banner: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
//   },
// ];

/* =========================
   ARTISTS
========================= */
// const artists = [
//   {
//     id: 1,
//     name: "Metallica",
//     image:
//       "https://i.pinimg.com/webp/1200x/9c/44/a5/9c44a51584645d6d2524288f40600cf0.webp",
//     genreIds: [1],
//   },
//   {
//     id: 2,
//     name: "Slipknot",
//     image:
//       "https://i.pinimg.com/736x/e9/ee/65/e9ee65c9a4cf041f09e0232035b30e92.jpg",
//     genreIds: [1],
//   },
//   {
//     id: 3,
//     name: "Avenged Sevenfold",
//     image:
//       "https://i.pinimg.com/1200x/83/db/c6/83dbc69e2b655085855eca6007ddeed1.jpg",
//     genreIds: [1],
//   },
// ];

/* =========================
   ALBUMS
========================= */
// const albums = [
//   {
//     id: 1,
//     title: "Metallica (Black Album)",
//     artistId: 1,
//     genreId: 1,
//     cover:
//       "https://i.pinimg.com/736x/e3/7a/81/e37a81fcbd4fb7e8df4ef1c4fc3b090a.jpg",
//   },
//   {
//     id: 2,
//     title: "Iowa",
//     artistId: 2,
//     genreId: 1,
//     cover: "https://i.pinimg.com/736x/ee/01/68/ee016862d436644786bf979bf5643398.jpg",
//   },
//   {
//     id: 3,
//     title: "Hail to the King",
//     artistId: 3,
//     genreId: 1,
//     cover:
//       "https://i.pinimg.com/736x/d8/d7/de/d8d7defb0470622fd58d9140422270ba.jpg",
//   },
// ];

/* =========================
   SONGS
========================= */
// const songs = [
//   {
//     id: 1,
//     title: "Enter Sandman",
//     artistId: 1,
//     albumId: 1,
//     duration: "5:31",
//     genreId: 1,
//     cover:
//       "https://i.pinimg.com/736x/8f/0d/9d/8f0d9d3bd93219f6d887c7d6b888fa81.jpg",
//     audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//   },
//   {
//     id: 2,
//     title: "Duality",
//     artistId: 2,
//     albumId: 2,
//     duration: "4:12",
//     genreId: 1,
//     cover: "https://i.pinimg.com/736x/ae/e3/16/aee316568f8c8a86b1e47c365a4bd80d.jpg",
//     audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//   },
//   {
//     id: 3,
//     title: "Hail to the King",
//     artistId: 3,
//     albumId: 3,
//     duration: "5:05",
//     genreId: 1,
//     cover:
//       "https://i.pinimg.com/736x/57/d9/75/57d975cbea2b1ddaec681361325b63cc.jpg",
//     audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//   },
// ];

/* =========================
   FILTER DATA
========================= */
const currentGenre = computed(() =>
  genres.find((g) => g.name.toLowerCase() === genreName),
);
console.log("currentGenre", currentGenre.value);

const genreArtists = computed(() =>
  artists.filter((a) => a.genreIds.includes(currentGenre.value?.id)),
);
console.log("genreArtists", genreArtists.value);

const genreSongs = computed(() =>
  songs.filter((s) => s.genreId === currentGenre.value?.id),
);
console.log("genreSongs", genreSongs.value)
const genreAlbums = computed(() =>
albums.filter((a) => a.genreId === currentGenre.value?.id),
);
console.log("genreAlbums", genreAlbums.value)


const relatedGenres = computed(() =>
  genres.filter((g) => g.name.toLowerCase() !== genreName),
);
</script>

<template>
  <Layout>
    <div class="text-white">
      <!-- =========================
           HERO SECTION
      ========================== -->
      <div
        class="p-10 bg-gradient-to-b h-96"
        :style="{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)),
      url(${currentGenre?.banner})
    `,
        }"
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
            <div class="w-32 h-32 bg-gray-700 rounded-full mb-2">
              <img
                :src="artist?.image"
                class="w-32 h-32 object-cover rounded-full mb-2"
              />
            </div>
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
            <div class="flex gap-5 items-center">
              <img :src="song.cover" alt="" class="w-[50px]">
              <span>{{ song.title }}</span>
            </div>
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
            <div class="h-24 bg-gray-700 rounded mb-2">
              <img :src="album.cover" alt=""  class="w-full h-full object-cover">
            </div>
            <p class="text-sm">{{ album.title }}</p>
          </div>
        </div>

        <!-- =========================
             RELATED GENRES
        ========================== -->
        <!-- <h2 class="text-xl font-semibold mb-4">Related Genres</h2>
        <div class="flex gap-4">
          <router-link
            v-for="genre in relatedGenres"
            :key="genre.id"
            :to="`/genre/${genre.name.toLowerCase()}`"
            class="px-4 py-2 bg-neutral-800 rounded hover:bg-neutral-700"
          >
            {{ genre.name }}
          </router-link>
        </div> -->
      </div>
    </div>
  </Layout>
</template>
