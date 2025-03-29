<script setup>
import Layout from '@/components/Layout.vue';
import toggle from '@/assets/toggle.png'
import music_1 from "@/assets/music1.png"
</script>

<template>
    <Layout>
        <div>
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
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  uppercase bg-[#1F1D2B] border-b border-[#3C4156]">
            <tr>
                <th scope="col" class="px-6 py-3 text-white">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 text-white">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 text-white">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 text-white">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 text-white">
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
                text-white 
                whitespace-nowrap 
                dark:text-white"
                >
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
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
                whitespace-nowrap 
                dark:text-white"
                >
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="
            bg-white 
            dark:bg-gray-800 
            hover:bg-gray-50 
            dark:hover:bg-gray-600
            "
            >
                <th scope="row" class="
                px-6 py-4 
                font-medium 
                text-gray-900 
                whitespace-nowrap 
                dark:text-white
                "
                >
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
     
        </div>
    </Layout>
</template>