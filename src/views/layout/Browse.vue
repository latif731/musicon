<script setup lang="ts">
import { RouterLink } from "vue-router";
import Layout from "@/components/Layout.vue";

const genres = [
  {
    name: "Pop",
    image:
      "https://images.unsplash.com/photo-1678899174068-d576b01a3b4c?q=80&w=400",
  },
  {
    name: "Rock",
    image:
      "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400",
  },
  {
    name: "Jazz",
    image:
      "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400",
  },
  {
    name: "Hip Hop",
    image:
      "https://images.unsplash.com/photo-1583022312757-2d9b628ef788?q=80&w=400",
  },
  {
    name: "Electronic",
    image:
      "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?q=80&w=400",
  },
  {
    name: "Lo-fi",
    image:
      "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400",
  },
  {
    name: "Indie",
    image:
      "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400",
  },
  {
    name: "Classical",
    image:
      "https://images.unsplash.com/photo-1759306725469-ce04b6600540?q=80&w=400",
  },
];

const trending = [
  {
    title: "Neon Nights",
    artist: "Stella Moon",
    image:
      "https://images.unsplash.com/photo-1703583956423-6fafc450a200?q=80&w=400",
  },
  {
    title: "After Hours",
    artist: "The Midnight",
    image:
      "https://images.unsplash.com/photo-1667346271021-68904db3e8b4?q=80&w=400",
  },
  {
    title: "Summer Vibes",
    artist: "Ocean Drive",
    image:
      "https://images.unsplash.com/photo-1717769165971-c81dfab13a1c?q=80&w=400",
  },
  {
    title: "Urban Dreams",
    artist: "Metro Boy",
    image:
      "https://images.unsplash.com/photo-1653473672408-5d2d68fa1278?q=80&w=400",
  },
  {
    title: "Crystal Skies",
    artist: "Luna Ray",
    image:
      "https://images.unsplash.com/photo-1604145421922-8f5f809cd3ef?q=80&w=400",
  },
  {
    title: "Vinyl Classics",
    artist: "Various Artists",
    image:
      "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400",
  },
];

const radioStations = [
  {
    name: "Electro Pulse",
    listeners: "2.4k",
    image:
      "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?q=80&w=400",
  },
  {
    name: "Lo-fi Dreams",
    listeners: "1.8k",
    image:
      "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400",
  },
  {
    name: "Jazz Mood",
    listeners: "850",
    image:
      "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400",
  },
];

const playlists = [
  {
    title: "Today's Hits",
    description: "The biggest songs",
    image:
      "https://images.unsplash.com/photo-1678899174068-d576b01a3b4c?q=80&w=400",
  },
  {
    title: "Chill Vibes",
    description: "Relax and unwind",
    image:
      "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400",
  },
  {
    title: "Workout Mix",
    description: "Get pumped up",
    image:
      "https://images.unsplash.com/photo-1583022312757-2d9b628ef788?q=80&w=400",
  },
  {
    title: "Focus Flow",
    description: "Stay productive",
    image:
      "https://images.unsplash.com/photo-1732832183700-fcdddbc8843c?q=80&w=400",
  },
  {
    title: "Party Time",
    description: "Dance all night",
    image:
      "https://images.unsplash.com/photo-1653569397438-60c2a42a265b?q=80&w=400",
  },
  {
    title: "Road Trip",
    description: "Songs for the journey",
    image:
      "https://images.unsplash.com/photo-1717769165971-c81dfab13a1c?q=80&w=400",
  },
];
</script>

<template>
  <Layout>
    <div class="p-8 space-y-12 pb-32">
      <!-- Hero Section -->
      <section>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <h1 class="text-5xl font-black tracking-tight mb-4 text-white">Browse All</h1>
          <p class="text-xl text-muted-foreground text-white">
            Explore music by genres, moods, and more
          </p>
        </div>
      </section>

      <!-- Genres -->
      <section>
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-black tracking-tight text-white">Genres</h2>
          <RouterLink
            to="/view-all/genres"
            class="text-primary font-semibold hover:underline text-white"
          >
            See All
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(genre, idx) in genres"
            :key="genre.name"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="idx * 50"
            class="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
          >
            <RouterLink
              :to="`/genre/${genre.name.toLowerCase().replace(/\\s+/g, '-')}`"
              class="block size-full"
            >
              <img
                :src="genre.image"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                :alt="genre.name"
              />
              <div
                class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"
              />
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">{{ genre.name }}</h3>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Trending Now -->
      <section>
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-black tracking-tight text-white">Trending Now</h2>
          <RouterLink
            to="/view-all/trending-albums"
            class="text-primary font-semibold hover:underline text-white"
          >
            See All
          </RouterLink>
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <div
            v-for="(item, idx) in trending"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="idx * 50"
            :hovered="{ y: -8 }"
            class="group cursor-pointer"
          >
            <div
              class="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-accent shadow-lg"
            >
              <img
                :src="item.image"
                class="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                :alt="item.title"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <Button
                  size="icon"
                  class="size-14 rounded-full bg-primary shadow-2xl text-white"
                >
                  <Play :size="28" class="fill-current ml-1" />
                </Button>
              </div>
            </div>
            <h4 class="font-bold truncate text-white">{{ item.title }}</h4>
            <p class="text-sm text-muted-foreground truncate text-white">
              {{ item.artist }}
            </p>
          </div>
        </div>
      </section>

      <!-- Radio Stations -->
      <section>
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-black tracking-tight text-white">Radio Stations</h2>
          <RouterLink
            to="/view-all/stations"
            class="text-primary font-semibold hover:underline text-white"
          >
            See All
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(station, idx) in radioStations"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1 }"
            :delay="idx * 100"
            class="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group shadow-xl"
          >
            <img
              :src="station.image"
              class="size-full object-cover group-hover:scale-110 transition-transform duration-700"
              :alt="station.name"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
            />
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-center gap-2 mb-2">
                <Radio :size="16" class="text-primary" />
                <span
                  class="text-xs font-bold text-white/80 uppercase tracking-wider"
                  >Live</span
                >
              </div>
              <h3 class="text-2xl font-black text-white mb-1">
                {{ station.name }}
              </h3>
              <p class="text-sm text-white/80">
                {{ station.listeners }} listening now
              </p>
            </div>
            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <Button
                size="icon"
                class="size-16 rounded-full bg-primary shadow-2xl"
              >
                <Play :size="32" class="fill-current ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Curated Playlists -->
      <section>
        <h2 class="text-3xl font-black tracking-tight mb-6 text-white">
          Curated Playlists
        </h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <div
            v-for="(playlist, idx) in playlists"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="idx * 50"
            :hovered="{ y: -8 }"
            class="group cursor-pointer"
          >
            <div
              class="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-accent shadow-lg"
            >
              <img
                :src="playlist.image"
                class="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                :alt="playlist.title"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <Button
                  size="icon"
                  class="size-14 rounded-full bg-primary shadow-2xl"
                >
                  <Play :size="28" class="fill-current ml-1" />
                </Button>
              </div>
            </div>
            <h4 class="font-bold truncate text-white">{{ playlist.title }}</h4>
            <p class="text-sm text-muted-foreground text-white truncate">
              {{ playlist.description }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
