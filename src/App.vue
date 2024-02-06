<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/NavbarHome.vue";
</script>

<template>
  <main class="bg-neutral-200 h-dvh">
    <Navbar />
    <RouterView />
  </main>
</template>

<style scoped></style>
