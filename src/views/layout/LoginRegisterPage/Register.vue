<script setup>
import logo1 from "@/assets/Logo1.png";
import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";
import { ref, defineEmits } from "vue";

const password = ref("");
const showPassword = ref(false);

const emit = defineEmits(["switch-to-login"]);
</script>

<template>
  <div
    class="w-login bg-logreg2 rounded-lg max-h-[640px] mb-80 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:hover:bg-scroll [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-logreg2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-logreg2 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
  >
    <div
      class="banner bg-logreg3 h-20 flex items-center border rounded border-x-slate-800 justify-center"
    >
      <img :src="logo1" alt="" />
    </div>
    <div class="flex flex-col items-start p-5 mt-5">
      <div>
        <h1 class="font-kontol font-700 text-[24px]">Sign Up</h1>
      </div>
      <div class="mt-8">
        <form>
          <div class="flex flex-col gap-2 mb-3">
            <label for="" class="font-kontol font-700 text-[16px]"
              >Full Name</label
            >
            <input
              type="text"
              class="w-input rounded outline-none pl-2 pb-1 h-input bg-input"
              placeholder="Input your email or username"
            />
          </div>
          <div class="flex flex-col gap-2 mb-3">
            <label for="" class="font-kontol font-700 text-[16px]"
              >Username</label
            >
            <input
              type="text"
              class="w-input rounded outline-none pl-2 pb-1 h-input bg-input"
              placeholder="Input your email or username"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="" class="font-kontol font-700 text-[16px]"
              >Email or Username</label
            >
            <input
              type="email"
              class="w-input rounded outline-none pl-2 pb-1 h-input bg-input"
              placeholder="Input your email or username"
            />
          </div>
          <div class="flex flex-col gap-2 mt-3">
            <label for="" Lognclass="font-kontol font-700 text-[16px]"
              >Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="w-input rounded outline-none pl-2 pb-1 h-input bg-input"
                placeholder="Input your password"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-2 text-abuabu"
              >
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2 mt-3">
            <label for="" class="font-kontol font-700 text-[16px]"
              >Conform Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="w-input rounded outline-none pl-2 pb-1 h-input bg-input"
                placeholder="Input your password"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-2 text-abuabu"
              >
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
              </button>
            </div>
          </div>
          <button
            class="w-[396px] bg-gradient-to-r from-right to-left rounded-full h-[41px] mt-10"
          >
            Register
          </button>
        </form>
        <div class="font-kontol text-[14px] text-center mt-1 text-gray-400">
          Don’t have an account?
          <span
            class="text-white cursor-pointer"
            @click="emit('switch-to-login')"
            >Login</span
          >
        </div>
        <div class="items-center flex justify-between mt-2">
          <div class="border w-[165px] mt-1 border-garis rounded-full"></div>
          or
          <div class="border w-[165px] mt-1 border-garis rounded-full"></div>
        </div>
        <div>
          <button
            class="w-[396px] border hover:bg-hover rounded-full h-[41px] mt-4 border-garis flex items-center pl-3 gap-24 h hover:text-black"
          >
            <div>
              <img :src="google" alt="" />
            </div>
            <div class="pl-3 hover:text-black">Login with Google</div>
          </button>
          <button
            class="w-[396px] border hover:bg-hover rounded-full h-[41px] mt-4 border-garis pl-3 flex items-center gap-24 hover:text-black"
          >
            <div>
              <img :src="facebook" alt="" />
            </div>
            <div class="pl-2 hover:text-black">Login with Facebook</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
