<script setup>
import CreatePlaylist from "./CreatePlaylist.vue";
import Layout from "@/components/Layout.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <Layout>
      <RouterView/>
    </Layout>
  </div>
</template>

<style lang="scss" scoped></style>
