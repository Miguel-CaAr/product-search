<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/NavbarHome.vue";
</script>

<template>
  <main class="main">
    <Navbar />
    <RouterView />
  </main>
</template>

<style scoped></style>
