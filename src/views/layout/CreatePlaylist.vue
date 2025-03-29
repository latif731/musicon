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
        </div>
    </Layout>
</template>