<script setup>
import playlist_1 from "@/assets/playlist1.png"
import playlist_2 from "@/assets/playlist2.png"
import playlist_3 from "@/assets/playlist3.png"
import playlist_4 from "@/assets/playlist4.png"
import playlist_5 from "@/assets/playlist5.png"
</script>

<template>
    <div
    class="w-[200px] h-[240px] rounded-[8px] bg-card px-5 py-5"
    >
    <div class=" flex flex-col items-center gap-3">
        <img :src="playlist_1" alt="" class="w-[159px] h-[160px]">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Hollow</h2>
        </div>
    </div>
    </div>
    <div
    class="w-[200px] h-[240px] rounded-[8px] bg-card px-5 py-5"
    >
    <div class=" flex flex-col items-center gap-3">
        <img :src="playlist_2" alt="" class="w-[159px] h-[160px]">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Hollow</h2>
        </div>
    </div>
    </div>
    <div
    class="w-[200px] h-[240px] rounded-[8px] bg-card px-5 py-5"
    >
    <div class=" flex flex-col items-center gap-3">
        <img :src="playlist_3" alt="" class="w-[159px] h-[160px]">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Hollow</h2>
        </div>
    </div>
    </div>
    <div
    class="w-[200px] h-[240px] rounded-[8px] bg-card px-5 py-5"
    >
    <div class=" flex flex-col items-center gap-3">
        <img :src="playlist_4" alt="" class="w-[159px] h-[160px]">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Hollow</h2>
        </div>
    </div>
    </div>
    <div
    class="w-[200px] h-[240px] rounded-[8px] bg-card px-5 py-5"
    >
    <div class=" flex flex-col items-center gap-3">
        <img :src="playlist_5" alt="" class="w-[159px] h-[160px]">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Hollow</h2>
        </div>
    </div>
    </div>
</template>