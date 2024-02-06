<script setup>
import ProductDisplay from "@/components/ProductDisplay.vue";
import { useProductsStore } from "@/stores/Products";
import Loading from "@/components/LoadingSearch.vue";

const data = useProductsStore();
</script>

<template>
  <template v-if="!data.products">
    <Loading />
  </template>
  <template v-else>
    <ProductDisplay />
  </template>
</template>
