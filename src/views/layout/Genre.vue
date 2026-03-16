<script setup>
import { useRoute } from "vue-router";
import Layout from "@/components/Layout.vue";
const route = useRoute();

const genres = {
      "pop": {
      name: "Pop",
      description: "Popular music characterized by catchy melodies, simple chord progressions, and relatable lyrics that dominate the charts worldwide.",
      color: "bg-pink-500",
      gradient: "from-pink-500/20 to-purple-500/20",
      image: "https://images.unsplash.com/photo-1678899174068-d576b01a3b4c?q=80&w=1600",
      coverImage: "https://images.unsplash.com/photo-1656401992374-5ce15b9a11fa?q=80&w=1600",
      stats: {
        followers: "250M",
        songs: "5M+",
        artists: "500K+"
      },
      featuredPlaylists: [
        { id: 1, title: "Today's Top Hits", curator: "Musicon", songs: 50, image: "https://images.unsplash.com/photo-1678899174068-d576b01a3b4c?q=80&w=400" },
        { id: 2, title: "Pop Rising", curator: "Musicon", songs: 100, image: "https://images.unsplash.com/photo-1703583956423-6fafc450a200?q=80&w=400" },
        { id: 3, title: "Pop Classics", curator: "Throwback", songs: 75, image: "https://images.unsplash.com/photo-1604145421922-8f5f809cd3ef?q=80&w=400" },
        { id: 4, title: "Indie Pop", curator: "Fresh Finds", songs: 60, image: "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400" },
      ],
      topSongs: [
        { id: 1, title: "Dancing in the Dark", artist: "Luna Ray", plays: "125M", duration: "3:45", image: "https://images.unsplash.com/photo-1615748562359-3a430a3b5e56?q=80&w=400" },
        { id: 2, title: "Starlight Dreams", artist: "Stella Moon", plays: "112M", duration: "4:12", image: "https://images.unsplash.com/photo-1703583956423-6fafc450a200?q=80&w=400" },
        { id: 3, title: "Ocean Breeze", artist: "Ocean Drive", plays: "98M", duration: "2:58", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: 4, title: "Electric Hearts", artist: "Luna Ray", plays: "87M", duration: "3:30", image: "https://images.unsplash.com/photo-1615748562359-3a430a3b5e56?q=80&w=400" },
        { id: 5, title: "Midnight City", artist: "Stella Moon", plays: "76M", duration: "4:03", image: "https://images.unsplash.com/photo-1703583956423-6fafc450a200?q=80&w=400" },
      ],
      topArtists: [
        { id: "luna-ray", name: "Luna Ray", followers: "2.5M", image: "https://images.unsplash.com/photo-1615748562359-3a430a3b5e56?q=80&w=400" },
        { id: "stella-moon", name: "Stella Moon", followers: "1.9M", image: "https://images.unsplash.com/photo-1703583956423-6fafc450a200?q=80&w=400" },
        { id: "ocean-drive", name: "Ocean Drive", followers: "950K", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: "forest", name: "Forest", followers: "820K", image: "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400" },
      ],
      relatedGenres: [
        { name: "Indie Pop", color: "bg-lime-500", image: "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400" },
        { name: "Electro Pop", color: "bg-blue-500", image: "https://images.unsplash.com/photo-1653569397438-60c2a42a265b?q=80&w=400" },
        { name: "Dance Pop", color: "bg-purple-500", image: "https://images.unsplash.com/photo-1656283384093-1e227e621fad?q=80&w=400" },
        { name: "Pop Rock", color: "bg-red-500", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
      ]
    },
    "hip-hop": {
      name: "Hip Hop",
      description: "Urban music genre featuring rhythmic beats, rap vocals, and powerful storytelling that defines contemporary street culture.",
      color: "bg-emerald-600",
      gradient: "from-emerald-600/20 to-teal-600/20",
      image: "https://images.unsplash.com/photo-1583022312757-2d9b628ef788?q=80&w=1600",
      coverImage: "https://images.unsplash.com/photo-1764805354913-953132e82086?q=80&w=1600",
      stats: {
        followers: "180M",
        songs: "3M+",
        artists: "300K+"
      },
      featuredPlaylists: [
        { id: 1, title: "Hip Hop Heat", curator: "Musicon", songs: 75, image: "https://images.unsplash.com/photo-1583022312757-2d9b628ef788?q=80&w=400" },
        { id: 2, title: "Rap Caviar", curator: "Urban Vibes", songs: 80, image: "https://images.unsplash.com/photo-1770287329282-1fabdc26248b?q=80&w=400" },
        { id: 3, title: "Old School Hip Hop", curator: "Throwback", songs: 100, image: "https://images.unsplash.com/photo-1653473672408-5d2d68fa1278?q=80&w=400" },
        { id: 4, title: "Underground Rap", curator: "Fresh Finds", songs: 60, image: "https://images.unsplash.com/photo-1613053342692-d0012e0444eb?q=80&w=400" },
      ],
      topSongs: [
        { id: 1, title: "City Lights", artist: "Metro Boy", plays: "156M", duration: "3:30", image: "https://images.unsplash.com/photo-1770287329282-1fabdc26248b?q=80&w=400" },
        { id: 2, title: "Street Legends", artist: "Metro Boy", plays: "134M", duration: "4:05", image: "https://images.unsplash.com/photo-1770287329282-1fabdc26248b?q=80&w=400" },
        { id: 3, title: "Hustle Mode", artist: "Ghost", plays: "112M", duration: "3:45", image: "https://images.unsplash.com/photo-1613053342692-d0012e0444eb?q=80&w=400" },
        { id: 4, title: "Night Shift", artist: "Metro Boy", plays: "98M", duration: "3:55", image: "https://images.unsplash.com/photo-1770287329282-1fabdc26248b?q=80&w=400" },
        { id: 5, title: "Rise Up", artist: "Ghost", plays: "87M", duration: "4:20", image: "https://images.unsplash.com/photo-1613053342692-d0012e0444eb?q=80&w=400" },
      ],
      topArtists: [
        { id: "metro-boy", name: "Metro Boy", followers: "3.2M", image: "https://images.unsplash.com/photo-1770287329282-1fabdc26248b?q=80&w=400" },
        { id: "ghost", name: "Ghost", followers: "2.1M", image: "https://images.unsplash.com/photo-1613053342692-d0012e0444eb?q=80&w=400" },
        { id: "dj-neon", name: "DJ Neon", followers: "1.5M", image: "https://images.unsplash.com/photo-1662491516439-efb6d2b6c1b4?q=80&w=400" },
      ],
      relatedGenres: [
        { name: "Trap", color: "bg-red-600", image: "https://images.unsplash.com/photo-1583022312757-2d9b628ef788?q=80&w=400" },
        { name: "R&B", color: "bg-orange-600", image: "https://images.unsplash.com/photo-1562065417-7b776d5b9c4a?q=80&w=400" },
        { name: "Lo-fi Hip Hop", color: "bg-purple-600", image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { name: "Drill", color: "bg-zinc-900", image: "https://images.unsplash.com/photo-1653473672408-5d2d68fa1278?q=80&w=400" },
      ]
    },
    "electronic": {
      name: "Electronic",
      description: "Digital music produced using synthesizers, computers, and electronic instruments, spanning from ambient to dance.",
      color: "bg-blue-600",
      gradient: "from-blue-600/20 to-cyan-600/20",
      image: "https://images.unsplash.com/photo-1653569397438-60c2a42a265b?q=80&w=1600",
      coverImage: "https://images.unsplash.com/photo-1600542552868-56ed242290e7?q=80&w=1600",
      stats: {
        followers: "200M",
        songs: "4M+",
        artists: "400K+"
      },
      featuredPlaylists: [
        { id: 1, title: "Electronic Pulse", curator: "Musicon", songs: 100, image: "https://images.unsplash.com/photo-1653569397438-60c2a42a265b?q=80&w=400" },
        { id: 2, title: "EDM Bangers", curator: "Party Time", songs: 75, image: "https://images.unsplash.com/photo-1600542552868-56ed242290e7?q=80&w=400" },
        { id: 3, title: "Chill Electronic", curator: "Relax", songs: 60, image: "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?q=80&w=400" },
        { id: 4, title: "House Party", curator: "Dance Floor", songs: 80, image: "https://images.unsplash.com/photo-1656283384093-1e227e621fad?q=80&w=400" },
      ],
      topSongs: [
        { id: 1, title: "Electric Pulse", artist: "DJ Neon", plays: "145M", duration: "3:55", image: "https://images.unsplash.com/photo-1662491516439-efb6d2b6c1b4?q=80&w=400" },
        { id: 2, title: "Ocean Waves", artist: "Ocean Drive", plays: "128M", duration: "4:20", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: 3, title: "Neon Lights", artist: "DJ Neon", plays: "115M", duration: "3:45", image: "https://images.unsplash.com/photo-1662491516439-efb6d2b6c1b4?q=80&w=400" },
        { id: 4, title: "Digital Dreams", artist: "Ocean Drive", plays: "98M", duration: "4:05", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: 5, title: "Cyber Space", artist: "DJ Neon", plays: "87M", duration: "3:30", image: "https://images.unsplash.com/photo-1662491516439-efb6d2b6c1b4?q=80&w=400" },
      ],
      topArtists: [
        { id: "dj-neon", name: "DJ Neon", followers: "2.8M", image: "https://images.unsplash.com/photo-1662491516439-efb6d2b6c1b4?q=80&w=400" },
        { id: "ocean-drive", name: "Ocean Drive", followers: "950K", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: "the-midnight", name: "The Midnight", followers: "1.8M", image: "https://images.unsplash.com/photo-1667346271021-68904db3e8b4?q=80&w=400" },
      ],
      relatedGenres: [
        { name: "House", color: "bg-cyan-600", image: "https://images.unsplash.com/photo-1656283384093-1e227e621fad?q=80&w=400" },
        { name: "Techno", color: "bg-slate-700", image: "https://images.unsplash.com/photo-1600542552868-56ed242290e7?q=80&w=400" },
        { name: "Dubstep", color: "bg-purple-700", image: "https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?q=80&w=400" },
        { name: "Trance", color: "bg-indigo-600", image: "https://images.unsplash.com/photo-1653569397438-60c2a42a265b?q=80&w=400" },
      ]
    },
    "jazz": {
      name: "Jazz",
      description: "Sophisticated music characterized by improvisation, complex harmonies, and swing rhythms born from American roots.",
      color: "bg-amber-600",
      gradient: "from-amber-600/20 to-yellow-600/20",
      image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=1600",
      coverImage: "https://images.unsplash.com/photo-1772399764232-c35bac262ed6?q=80&w=1600",
      stats: {
        followers: "85M",
        songs: "2M+",
        artists: "150K+"
      },
      featuredPlaylists: [
        { id: 1, title: "Jazz Classics", curator: "Musicon", songs: 100, image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
        { id: 2, title: "Smooth Jazz", curator: "Relaxation", songs: 75, image: "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400" },
        { id: 3, title: "Modern Jazz", curator: "Contemporary", songs: 60, image: "https://images.unsplash.com/photo-1772399764232-c35bac262ed6?q=80&w=400" },
        { id: 4, title: "Jazz Cafe", curator: "Coffee Time", songs: 80, image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
      ],
      topSongs: [
        { id: 1, title: "Autumn Leaves", artist: "Jazz Ensemble", plays: "65M", duration: "5:30", image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
        { id: 2, title: "Blue in Green", artist: "Smooth Trio", plays: "58M", duration: "5:45", image: "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400" },
        { id: 3, title: "Take Five", artist: "Jazz Masters", plays: "52M", duration: "5:24", image: "https://images.unsplash.com/photo-1772399764232-c35bac262ed6?q=80&w=400" },
        { id: 4, title: "So What", artist: "Jazz Ensemble", plays: "48M", duration: "9:02", image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
        { id: 5, title: "All Blues", artist: "Smooth Trio", plays: "42M", duration: "11:33", image: "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400" },
      ],
      topArtists: [
        { id: "jazz-ensemble", name: "Jazz Ensemble", followers: "1.2M", image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
        { id: "smooth-trio", name: "Smooth Trio", followers: "890K", image: "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400" },
        { id: "jazz-masters", name: "Jazz Masters", followers: "1.5M", image: "https://images.unsplash.com/photo-1772399764232-c35bac262ed6?q=80&w=400" },
      ],
      relatedGenres: [
        { name: "Blues", color: "bg-sky-900", image: "https://images.unsplash.com/photo-1762704452358-1a65ea252529?q=80&w=400" },
        { name: "Swing", color: "bg-amber-700", image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
        { name: "Bebop", color: "bg-orange-700", image: "https://images.unsplash.com/photo-1772399764232-c35bac262ed6?q=80&w=400" },
        { name: "Fusion", color: "bg-yellow-700", image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
      ]
    },
    "rock": {
      name: "Rock",
      description: "Powerful guitar-driven music with strong beats and rebellious spirit that has shaped generations.",
      color: "bg-red-600",
      gradient: "from-red-600/20 to-orange-600/20",
      image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=1600",
      coverImage: "https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?q=80&w=1600",
      stats: {
        followers: "220M",
        songs: "4.5M+",
        artists: "450K+"
      },
      featuredPlaylists: [
        { id: 1, title: "Rock Legends", curator: "Musicon", songs: 100, image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400" },
        { id: 2, title: "Modern Rock", curator: "New Wave", songs: 75, image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: 3, title: "Classic Rock", curator: "Throwback", songs: 150, image: "https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?q=80&w=400" },
        { id: 4, title: "Indie Rock", curator: "Alternative", songs: 80, image: "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400" },
      ],
      topSongs: [
        { id: 1, title: "Thunder Road", artist: "Rock Legends", plays: "132M", duration: "4:30", image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400" },
        { id: 2, title: "Electric Storm", artist: "Modern Rockers", plays: "118M", duration: "3:55", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: 3, title: "Break Free", artist: "Rock Legends", plays: "105M", duration: "4:15", image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400" },
        { id: 4, title: "Wild Hearts", artist: "Modern Rockers", plays: "98M", duration: "3:45", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: 5, title: "Revolution", artist: "Rock Legends", plays: "89M", duration: "5:02", image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400" },
      ],
      topArtists: [
        { id: "rock-legends", name: "Rock Legends", followers: "3.8M", image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400" },
        { id: "modern-rockers", name: "Modern Rockers", followers: "2.1M", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
        { id: "forest", name: "Forest", followers: "820K", image: "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400" },
      ],
      relatedGenres: [
        { name: "Metal", color: "bg-zinc-900", image: "https://images.unsplash.com/photo-1653473672408-5d2d68fa1278?q=80&w=400" },
        { name: "Punk", color: "bg-rose-700", image: "https://images.unsplash.com/photo-1768264229383-4a0756555c95?q=80&w=400" },
        { name: "Alternative", color: "bg-lime-600", image: "https://images.unsplash.com/photo-1612626825467-aa49b72116ce?q=80&w=400" },
        { name: "Grunge", color: "bg-stone-700", image: "https://images.unsplash.com/photo-1718044405588-dcfbba2a02b1?q=80&w=400" },
      ]
    },
    "lo-fi": {
      name: "Lo-fi",
      description: "Relaxing, mellow music with a nostalgic sound perfect for studying, working, or unwinding.",
      color: "bg-purple-600",
      gradient: "from-purple-600/20 to-pink-600/20",
      image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=1600",
      coverImage: "https://images.unsplash.com/photo-1772050137634-2ff904b6d8c5?q=80&w=1600",
      stats: {
        followers: "120M",
        songs: "1.5M+",
        artists: "200K+"
      },
      featuredPlaylists: [
        { id: 1, title: "Lo-fi Beats", curator: "Musicon", songs: 200, image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { id: 2, title: "Study Session", curator: "Focus", songs: 150, image: "https://images.unsplash.com/photo-1732832183700-fcdddbc8843c?q=80&w=400" },
        { id: 3, title: "Chill Vibes", curator: "Relaxation", songs: 100, image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { id: 4, title: "Night Drive", curator: "Ambient", songs: 80, image: "https://images.unsplash.com/photo-1772050137634-2ff904b6d8c5?q=80&w=400" },
      ],
      topSongs: [
        { id: 1, title: "Coffee Shop", artist: "Lo-fi Dreams", plays: "245M", duration: "2:45", image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { id: 2, title: "Rainy Days", artist: "Chill Collective", plays: "198M", duration: "3:12", image: "https://images.unsplash.com/photo-1732832183700-fcdddbc8843c?q=80&w=400" },
        { id: 3, title: "Study Mode", artist: "Lo-fi Dreams", plays: "176M", duration: "2:58", image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { id: 4, title: "Moonlight", artist: "Ambient Waves", plays: "154M", duration: "3:30", image: "https://images.unsplash.com/photo-1772050137634-2ff904b6d8c5?q=80&w=400" },
        { id: 5, title: "Morning Mist", artist: "Chill Collective", plays: "142M", duration: "2:40", image: "https://images.unsplash.com/photo-1732832183700-fcdddbc8843c?q=80&w=400" },
      ],
      topArtists: [
        { id: "lofi-dreams", name: "Lo-fi Dreams", followers: "4.2M", image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { id: "chill-collective", name: "Chill Collective", followers: "3.5M", image: "https://images.unsplash.com/photo-1732832183700-fcdddbc8843c?q=80&w=400" },
        { id: "ambient-waves", name: "Ambient Waves", followers: "2.8M", image: "https://images.unsplash.com/photo-1772050137634-2ff904b6d8c5?q=80&w=400" },
      ],
      relatedGenres: [
        { name: "Chillhop", color: "bg-indigo-600", image: "https://images.unsplash.com/photo-1679718890686-7f16f411b460?q=80&w=400" },
        { name: "Ambient", color: "bg-slate-600", image: "https://images.unsplash.com/photo-1772050137634-2ff904b6d8c5?q=80&w=400" },
        { name: "Jazz Hop", color: "bg-amber-600", image: "https://images.unsplash.com/photo-1760890633340-9c8cf3a292e0?q=80&w=400" },
        { name: "Study Beats", color: "bg-teal-600", image: "https://images.unsplash.com/photo-1732832183700-fcdddbc8843c?q=80&w=400" },
      ]
    }
};

const genreName = route.params.name || "rock";
const genre = genres[genreName] || genres.rock;
</script>

<template>
  <Layout>
    <div class="pb-32 text-white">
      <!-- HERO -->
      <section class="relative h-[420px] overflow-hidden">
        <img
          :src="genre.coverImage"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div
          class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#252836]"
        />

        <div class="relative h-full flex flex-col justify-end p-8 gap-4">
          <h1 class="text-7xl font-black">
            {{ genre.name }}
          </h1>

          <p class="max-w-2xl text-lg text-gray-200">
            {{ genre.description }}
          </p>

          <div class="flex gap-6 text-gray-300">
            <div>
              <span class="font-bold text-white">
                {{ genre.stats.followers }}
              </span>
              followers
            </div>

            <div>
              <span class="font-bold text-white">
                {{ genre.stats.songs }}
              </span>
              songs
            </div>
          </div>
        </div>
      </section>

      <!-- ACTION BAR -->
      <section
        class="px-8 py-6 border-b border-gray-700 bg-[#252836] sticky top-16"
      >
        <div class="flex gap-4">
          <button
            class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold"
          >
            ▶ Play All
          </button>

          <button class="border border-gray-500 px-6 py-3 rounded-full">
            📻 {{ genre.name }} Radio
          </button>

          <button class="border border-gray-500 px-4 py-3 rounded-full">
            ❤
          </button>
        </div>
      </section>

      <div class="p-8 space-y-14">
        <!-- PLAYLIST -->
        <section>
          <h2 class="text-3xl font-bold mb-6">Featured Playlists</h2>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div
              v-for="playlist in genre.featuredPlaylists"
              :key="playlist.id"
              class="group cursor-pointer"
            >
              <div class="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  :src="playlist.image"
                  class="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              <h4 class="font-semibold">
                {{ playlist.title }}
              </h4>

              <p class="text-gray-400 text-sm">{{ playlist.songs }} songs</p>
            </div>
          </div>
        </section>

        <!-- SONGS -->
        <section>
          <h2 class="text-3xl font-bold mb-6">Top {{ genre.name }} Songs</h2>

          <div class="space-y-3">
            <div
              v-for="(song, i) in genre.topSongs"
              :key="song.id"
              class="flex items-center justify-between p-4 rounded-xl hover:bg-white/5"
            >
              <div class="flex items-center gap-4">
                <span class="w-6 text-gray-400">
                  {{ i + 1 }}
                </span>

                <img :src="song.image" class="w-12 h-12 rounded" />

                <div>
                  <h4 class="font-semibold">
                    {{ song.title }}
                  </h4>
                  <p class="text-gray-400 text-sm">
                    {{ song.artist }}
                  </p>
                </div>
              </div>

              <div class="flex gap-6 text-gray-400 text-sm">
                <span>{{ song.plays }}</span>
                <span>{{ song.duration }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ARTISTS -->
        <section>
          <h2 class="text-3xl font-bold mb-6">Top {{ genre.name }} Artists</h2>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div
              v-for="artist in genre.topArtists"
              :key="artist.id"
              class="text-center cursor-pointer group"
            >
              <img
                :src="artist.image"
                class="w-36 h-36 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition"
              />

              <h4 class="font-semibold">
                {{ artist.name }}
              </h4>

              <p class="text-gray-400 text-sm">
                {{ artist.followers }} followers
              </p>
            </div>
          </div>
        </section>

        <!-- RELATED -->
        <section>
          <h2 class="text-3xl font-bold mb-6">Related Genres</h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="genre in genre.relatedGenres"
              :key="genre.name"
              class="relative aspect-video rounded-xl overflow-hidden cursor-pointer"
            >
              <img :src="genre.image" class="w-full h-full object-cover" />

              <div class="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 class="text-xl font-bold">
                  {{ genre.name }}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>
