<script setup>
    import music_1 from "@/assets/music1.png"
    import music_2 from "@/assets/music2.png"
    import music_3 from "@/assets/music3.png"
</script>

<template>
    <div
    class="w-[354px] h-[120px] rounded-[8px] bg-card p-3"
    >
    <div class="flex gap-10">
        <img :src="music_1" alt="">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Hollow</h2>
            <h3 class="text-[16px] font-kontol font-[700] text-white">Final Fantasy VII Remake</h3>
        </div>
    </div>
    </div>
    <div
    class="w-[354px] h-[120px] rounded-[8px] bg-card p-3"
    >
    <div class="flex gap-10">
        <img :src="music_2" alt="">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Kopi Dangdut</h2>
            <h3 class="text-[16px] font-kontol font-[700] text-white">Via Vallen</h3>
        </div>
    </div>
    </div>
    <div
    class="w-[354px] h-[120px] rounded-[8px] bg-card p-3"
    >
    <div class="flex gap-10">
        <img :src="music_3" alt="">
        <div class="flex flex-col justify-around">
            <h2 class="text-[24px] font-kontol font-[700] text-white ">Moon River</h2>
            <h3 class="text-[16px] font-kontol font-[700] text-white">Jacob Collier</h3>
        </div>
    </div>
    </div>
</template>