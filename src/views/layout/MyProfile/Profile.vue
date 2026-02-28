<script setup>
import Layout from "@/components/Layout.vue";
import foto from "@/assets/profile1.jpg";
import ArtistCard from "@/components/ArtistCard.vue";
</script>

<template>
  <Layout>
    <div class="text-white font-kontol font-[700] text-[32px]">
      <h1>Profile</h1>
    </div>
    <div class="p-9 flex items-center gap-10 border-b border-b-[#3C4156]">
      <img :src="foto" alt="" class="w-[160px] h-[160px] rounded-[180px]" />
      <div class="flex flex-col gap-5">
        <h6 class="text-white">Full Name</h6>
        <input
          type="text"
          name=""
          id=""
          class="w-[396px] h-[43px] rounded-[4px] bg-[#1F1D2B] text-white pl-[10px] border focus:outline-none border-[#1F1D2B]"
        />
        <div class="flex gap-5">
          <p class="text-[#E2E2EA]">20 Playlist Created</p>
          <p class="text-[#E2E2EA]">1.921 Songs Liked</p>
        </div>
      </div>
      <button class="text-black bg-white w-[142px] rounded-[4px] h-[43px]">Edit Name</button>
    </div>
    <div class="border-b border-b-[#3C4156] pb-16">
      <div class=" pt-9 flex justify-between">
        <h1 class="text-white font-kontol font-[700] text-[32px]">Your Top Artist</h1>
        <p class="font-kontol font-[700] text-[20px] text-[#92929D]">See All</p>
      </div>
      <div class="flex pt-5 gap-11">
        <ArtistCard/>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped></style>
