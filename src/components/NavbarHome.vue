<script setup>
import logo from "@/assets/Logo.png";
import search from "@/assets/icons/search.png";
import pp from "@/assets/musiconprofile.jpg";
import dropdown from "@/assets/dropdown.png";

import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const isOpen = ref(false);
const dropdownRef = ref(null);
const route = useRoute();
const router = useRouter();
const searchText = ref("");

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

// watch(searchText, (value) => {
//   if (value.trim() === "") return;

//   if (route.name !== "search") {
//     router.push({
//       name: "search",
//       query: { q: value },
//     });
//   } else {
//     router.replace({
//       query: { q: value },
//     });
//   }
// });

// watch(
//   () => route.query.q,
//   (q) => {
//     if (q !== searchText.value) {
//       searchText.value = q || "";
//     }
//   },
//   { immediate: true }
// );

// Sync dari URL ke input
// watch(
//   () => route.query.q,
//   (q) => {
//     searchText.value = q ? String(q) : "";
//   },
//   { immediate: true }
// );

// // Sync dari input ke URL
// watch(searchText, (value) => {
//   const trimmed = value.trim();

//   if (trimmed === "") return;

//   if (route.name !== "search") {
//     router.push({
//       name: "search",
//       query: { q: trimmed },
//     });
//   } else {
//     router.replace({
//       query: { q: trimmed },
//     });
//   }
// });

// watch(searchText, (value) => {
//   const trimmed = value.trim();

//   // ❌ Jangan lakukan apa-apa kalau kosong
//   if (!trimmed) return;

//   // ✅ Jika sudah di halaman search → cukup replace
//   if (route.name === "search") {
//     router.replace({
//       query: { q: trimmed },
//     });
//   } 
//   // ✅ Kalau belum di search → baru pindah halaman
//   else {
//     router.push({
//       name: "search",
//       query: { q: trimmed },
//     });
//   }
// })

watch(
  () => route.query.q,
  (q) => {
    searchText.value = q ? String(q) : "";
  },
  { immediate: true }
);

// watch(searchText, (value) => {
//   const trimmed = value.trim();

//   // Jika kosong, cukup update query jadi kosong
//   if (!trimmed) {
//     if (route.name === "search") {
//       router.replace({ query: {} });
//     }
//     return;
//   }

//   // Jika belum di halaman search → pindah sekali saja
//   if (route.name !== "search") {
//     router.push({
//       name: "search",
//       query: { q: trimmed },
//     });
//   } 
//   // Jika sudah di search → hanya replace (tidak push)
//   else {
//     router.replace({
//       query: { q: trimmed },
//     });
//   }
// });

// watch(searchText, (value) => {
//   const trimmed = value.trim();

//   if (route.name !== "search") {
//     // pindah halaman hanya sekali
//     if (trimmed !== "") {
//       router.push({
//         name: "search",
//         query: { q: trimmed },
//       });
//     }
//   } else {
//     // hanya update query tanpa trigger re-render
//     router.replace({
//       query: trimmed ? { q: trimmed } : {},
//     });
//   }
// });

// let timeout;

// watch(searchText, (value) => {
//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     if (route.name !== "search") {
//       router.push({
//         name: "search",
//         query: { q: value },
//       });
//     } else {
//       router.replace({
//         query: { q: value },
//       });
//     }
//   }, 4000);
// });


// watch(searchText, (value) => {
//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     const trimmed = value.trim();

//     // 🔴 Jika input kosong kembali ke home
//     if (!trimmed) {
//       if (route.name !== "main_home") {
//         router.push({ name: "main_home" });
//       }
//       return;
//     }

//     // 🟢 Jika ada text lakukan search
//     if (route.name !== "search") {
//       router.push({
//         name: "search",
//         query: { q: trimmed },
//       });
//     } else {
//       router.replace({
//         query: { q: trimmed },
//       });
//     }
//   }, 500); 
// });


let timeout;

watch(searchText, (value) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    const trimmed = value.trim();

    if (!trimmed) {
      if (route.name !== "home") {
        router.push({ name: "main_home" });
      }
      return;
    }

    if (route.name !== "search") {
      router.push({
        name: "search",
        query: { q: trimmed },
      });
    } else {
      router.replace({
        query: { q: trimmed },
      });
    }
  }, 1000);
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
        v-model="searchText"
        type="text"
        class="w-[859px] outline-none pl-2 bg-[#21242E] rounded-[8px] text-white"
        placeholder="search"
        autocomplete="off"
        spellcheck="false"
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
        class="absolute right-10 mt-3 w-[208px] bg-[#1F1D2B] p-4 rounded-xl shadow-xl"
      >
        <p
          class="hover:bg-[#3C4156] p-2 rounded text-white text-left font-josjis"
        >
          Profile
        </p>
        <p
          class="hover:bg-[#3C4156] p-2 rounded text-white text-left font-josjis"
        >
          Account
        </p>
        <p
          class="hover:bg-[#3C4156] p-2 rounded text-white text-left font-josjis"
        >
          Logout
        </p>
      </div>
    </div>
  </div>
</template>
