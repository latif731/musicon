<script setup>
import logo from "@/assets/Logo.png";
import bg from "@/assets/Vector.png";
import hero from "@/assets/HeroImage.png"
</script>

<template>
    <div id="TopNav" class="flex justify-between">
        <div
        id="left"
        >
          <div 
          class="pt-14 pl-10"
          >
            <img :src="logo" alt="" />
          </div>
          <div id="content" class="p-20 " >
            <h1
            class="font-tempek leading-[86.4px] tracking-[0.5%] font-[600] text-[72px] text-white"
            >
            Listening to The Music
          </h1>
          <h5 class="font-kontol text-white w-[456px] mt-5 font-[400]  leading-[28.8px] tracking-[0.5%]">
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Assumenda iure expedita beatae accusantium 
            odio, nulla laboriosam magni, fugit labore 
            explicabo necessitatibus dolorem dolore natus 
            quidem vero officiis quia incidunt veritatis?
          </h5>
          <div class="mt-12">
            <button
            class="h-14 bg-gradient-to-r from-[#FFCA6F] to-[#F3AF38] rounded-full text-white w-[187px] shadow-[0_5px_10px_0px_rgba(0,0,0,0.1)]"
            >
              Start Now
            </button>
          </div>
          </div>
        </div>
    <div  class="background-hijau relative">
      <img :src="bg" alt=""/>
      <div class="absolute top-0 pl-48 pt-[59px] text-white">
        <ul
        class="flex items-center gap-20"
        >
            <li class="font-kontol font-[500] text-[24px] leading-[28.8px] cursor-pointer">
                Home
            </li>
            <li class="font-kontol font-[500] text-[24px] leading-[28.8px] cursor-pointer">About</li>
            <button
            class="h-12 bg-gradient-to-r font-kontol font-[500] text-[24px] leading-[28.8px] cursor-pointer from-[#FFCA6F] to-[#F3AF38] rounded-full text-white w-[120px] shadow-[0_5px_10px_0px_rgba(0,0,0,0.1)]"
            >
              Log in
            </button>
        </ul>
      </div>
      <div class="absolute top-[100px] pl-52 pt-24">
        <img :src="hero" alt="" width="358.02px" height="510px"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
    .right-background{
      height: 50rem;
      width: 50rem;
      /* margin-top: 20rem; */
      background-color: #67BAF5;
      /* border-top-left-radius: 20rem; */
    }
</style>