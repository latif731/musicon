<script setup>
import Layout from '@/components/Layout.vue';
import toggle from '@/assets/toggle.png'
import music_1 from "@/assets/music1.png"
</script>

<template>
    <Layout>
        <div class="flex flex-col h-screen overflow-hidden">
                <h1 class="font-kontol font-700 text-[32px] text-white">Created Playlist / Anime Songs</h1>
                <div class="flex mt-6 gap-20">
                    <div class="flex gap-4 items-center">
                        <img class="w-[120px] h-[120px]" :src="music_1" alt="">
                        <div class="w-[595px]">
                            <p class="font-kontol font-700 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem eveniet optio, consectetur, est earum tempore at, sed quod dolorem voluptate id obcaecati eaque perspiciatis adipisci nesciunt! Sed, mollitia repellendus!</p>
                        </div>
                    </div>
                    <div>
                        <img :src="toggle" alt="">
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="p-2 bg-[#FFFFFF] rounded-lg w-[190px]">+ Add Song</button>
                </div>
<div class="flex-grow overflow-auto">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll">
            <thead class="text-xs text-gray-700  uppercase bg-[#1F1D2B] border-b border-[#3C4156]">
                <tr>
                    <th scope="col" class="px-6 py-3 text-white normal-case">
                        No
                    </th>
                    <th scope="col" class="px-6 py-3 text-white normal-case">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-white normal-case">
                        Artist
                    </th>
                    <th scope="col" class="px-6 py-3 text-white normal-case">
                        Duration
                    </th>
                    <th scope="col" class="px-6 py-3 text-white normal-case">
                        <span  class="text">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="
                bg-[#1F1D2B] 
                 dark:bg-gray-800 
                dark:border-gray-700 
                hover:bg-[#2D304D] 
                dark:hover:bg-gray-600"
                >
                    <th scope="row" class="
                    px-6 py-4 
                    font-medium
                    w-[0px] 
                    whitespace-nowrap
                    text-white  
                    dark:text-white"
                    >
                        1
                    </th>
                    <td class="px-1 py-4 flex items-center gap-4 text-white">
                        <img class="w-[40px] h-[40px]" :src="music_1" alt="">
                        Moon River
                    </td>
                    <td class="px-6 py-4 text-white">
                        Jacob Collier
                    </td>
                    <td class="px-6 py-4 text-white">
                        02.35
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="
                bg-[#1F1D2B] 
                 dark:bg-gray-800 
                dark:border-gray-700 
                hover:bg-[#2D304D] 
                dark:hover:bg-gray-600
                "
                >
                    <th scope="row" class="
                    px-6 py-4 
                    font-medium 
                    text-white
                    w-[0px] 
                    whitespace-nowrap 
                    dark:text-white"
                    >
                    2
                    </th>
                    <td class="px-1 py-4 flex items-center gap-4 text-white">
                        <img class="w-[40px] h-[40px]" :src="music_1" alt="">
                        Hollow
                    </td>
                    <td class="px-6 py-4 text-white">
                        Final Fantasi
                    </td>
                    <td class="px-6 py-4 text-white">
                        04.51
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="
                bg-[#1F1D2B] 
                dark:bg-gray-800 
                hover:bg-[#2D304D] 
                dark:hover:bg-gray-600
                "
                >
                    <th scope="row" class="
                    px-6 py-4 
                    font-medium 
                    text-white 
                    whitespace-nowrap 
                    dark:text-white
                    "
                    >
                        3
                    </th>
                    <td class="px-1 py-4 flex items-center gap-4 text-white">
                        <img class="w-[40px] h-[40px]" :src="music_1" alt="">
                        Jazz & Chill
                    </td>
                    <td class="px-6 py-4 text-white">
                        Joe Pass
                    </td>
                    <td class="px-6 py-4 text-white">
                        03.59
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
     
        </div>
    </Layout>
</template>