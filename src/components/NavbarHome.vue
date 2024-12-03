<script setup>
import logo from "@/assets/Logo.png"
import search from "@/assets/icons/search.png"
import pp from "@/assets/musiconprofile.jpg"
</script>

<template>
    <div id="home_navbar" class="bg-nav p-3 flex items-center justify-between sticky top-0 z-10">
        <div>
            <img :src="logo" alt=""
            >
        </div>
        <div
        class="bg-input h-[56px] w-[859px] relative pl-6 rounded-[8px] flex items-center gap-3 shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]"
        >   
        <div>
            <img :src="search" alt="" class="w-[25px] h-[25px] mt-1">
        </div>
            <input type="text" class=" w-[859px] outline-none pl-2  bg-input rounded-[8px] text-white" placeholder="search">
        </div>
        <div class="flex gap-6">
            <img :src="pp" alt=""
            class="w-[40px] h-[40px] rounded-[20px]"
            >
            <div>
                <h1 class="text-white font-kontol font-[700]">Latif Budi</h1>
                <h3 class="text-email font-kontol font-[400]">pamungkaslatifbudi@gmail.com</h3>
            </div>
        </div>
    </div>
</template>