<script setup>
import ProductDisplay from "@/components/ProductDisplay.vue";
import { useProductsStore } from "@/stores/Products";
import Loading from "@/components/LoadingSearch.vue";

const productsStore = useProductsStore();
</script>

<template>
  <template v-if="productsStore.loadingHttpRef">
    <Loading />
  </template>
  <template v-else>
    <ProductDisplay />
  </template>
</template>
