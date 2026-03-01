<script setup>
import Layout from "@/components/Layout.vue";
</script>

<template>
  <Layout>
    <div class="text-white font-kontol font-[700] text-[32px]">
      <h1>Account</h1>
    </div>
    <div class="pl-48 pr-10 pt-10 pb-48">
        <div class="w-[758px] h-[353px] bg-[#1F1D2B] rounded-[8px] p-5">
            <h1 class="font-kontol font-[700] text-[24px] text-white">Change Password</h1>
            <div class="p-2">
                <form action="">
                    <span class="text-white">Current Password</span>
                    <input type="password" class="w-[694px] h-[41px] rounded-[4px] bg-[#3C4156]">
                </form>
            </div>
        </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped></style>
