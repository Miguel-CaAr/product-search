<script setup>
import ProductDisplay from "@/components/ProductDisplay.vue";
import { useProductsStore } from "@/stores/Products";

const data = useProductsStore();
</script>

<template>
  <template v-if="data.products">
    <ProductDisplay />
  </template>
</template>
