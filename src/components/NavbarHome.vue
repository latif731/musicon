<script setup>
import logo from "@/assets/Logo.png";
import search from "@/assets/icons/search.png";
import pp from "@/assets/musiconprofile.jpg";
import dropdown from "@/assets/dropdown.png";

import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const dropdownRef = ref(null);

const togggleDropDown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    id="home_navbar"
    class="bg-nav p-3 flex items-center justify-between sticky top-0 z-50"
  >
    <div>
      <img :src="logo" alt="" />
    </div>
    <div
      class="bg-[#21242E] h-[56px] w-[859px] relative pl-6 rounded-[8px] flex items-center gap-3 shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]"
    >
      <div>
        <img :src="search" alt="" class="w-[25px] h-[25px] mt-1" />
      </div>
      <input
        type="text"
        class="w-[859px] outline-none pl-2 bg-[#21242E] rounded-[8px] text-white"
        placeholder="search"
      />
    </div>
    <div ref="dropdownRef" class="relative inline-block">
      <div class="flex gap-6">
        <img :src="pp" alt="" class="w-[40px] h-[40px] rounded-[20px]" />
        <div>
          <div class="flex gap-5 items-center">
            <h1 class="text-white font-kontol font-[700]">Latif Budi</h1>
            <div
              class="dropdown-button cursor-pointer"
              @click="togggleDropDown"
            >
              <img :src="dropdown" alt="" />
            </div>
          </div>
          <h3 class="text-email font-kontol font-[400]">
            pamungkaslatifbudi@gmail.com
          </h3>
        </div>
      </div>
      <div
        v-if="isOpen"
        class="absolute right-10 mt-3 w-[208px] bg-[#1F1D2B] p-4 rounded-xl shadow-xl "
      >
        <p class="hover:bg-[#3C4156] p-2 rounded text-white text-left font-josjis">Profile</p>
        <p class="hover:bg-[#3C4156] p-2 rounded text-white text-left font-josjis">Account</p>
        <p class="hover:bg-[#3C4156] p-2 rounded text-white text-left font-josjis">Logout</p>
      </div>
    </div>
  </div>
</template>
