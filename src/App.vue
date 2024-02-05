<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/NavbarHome.vue";
import ProductDisplay from "@/components/ProductDisplay.vue";
import { useProductsStore } from "./stores/Products";

const data = useProductsStore();
</script>

<template>
  <Navbar />
  <template v-if="data.products">
    <ProductDisplay />
  </template>
  <RouterView />
</template>

<style scoped></style>
