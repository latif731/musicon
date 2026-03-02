<script setup>
import Layout from "@/components/Layout.vue";

import { ref, defineEmits } from "vue";

const password = ref("");
const showPassword = ref(false);
</script>

<template>
  <Layout>
    <div class="text-white font-kontol font-[700] text-[32px]">
      <h1>Account</h1>
    </div>
    <div class="pl-48 pr-10 pt-10 pb-48">
      <div class="w-[758px] h-[353px] bg-[#1F1D2B] rounded-[8px] p-5">
        <h1 class="font-kontol font-[700] text-[24px] text-white">
          Change Password
        </h1>
        <div class="p-2">
          <form action="">
            <h6 class="text-white pb-2 pt-5 font-kontol font-[700] text-[16px]">
              Current Password
            </h6>
            <div class="relative">
              <input
                v-model="password"
                placeholder="Input your current password"
                :type="showPassword ? 'text' : 'password'"
                class="w-[694px] h-[41px] rounded-[4px] bg-[#3C4156] text-white pl-2 pb-1"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-6 top-2 text-abuabu"
              >
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
              </button>
            </div>
            <h6 class="text-white pb-2 pt-2 font-kontol font-[700] text-[16px]">
              New Password
            </h6>
            <div class="relative">
              <input
                v-model="password"
                placeholder="Input your new password"
                :type="showPassword ? 'text' : 'password'"
                class="w-[694px] h-[41px] rounded-[4px] bg-[#3C4156] text-white pl-2 pb-1"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-6 top-2 text-abuabu"
              >
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
              </button>
            </div>
            <h6 class="text-white pb-2 pt-2 font-kontol font-[700] text-[16px]">
              Confirm Password
            </h6>
            <div class="relative">
              <input
                v-model="password"
                placeholder="Confirm new password"
                :type="showPassword ? 'text' : 'password'"
                class="w-[694px] h-[41px] rounded-[4px] bg-[#3C4156] text-white pl-2 pb-1"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-6 top-2 text-abuabu"
              >
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped></style>
