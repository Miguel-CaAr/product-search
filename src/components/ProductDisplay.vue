<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useProductsStore } from "@/stores/Products";
const productsStore = useProductsStore();
const productsList = computed(() => JSON.parse(productsStore.products));
</script>
<template>
  <div>
    <ul v-if="productsList">
      <li v-for="product in productsList.data" :key="product.product_id">
        <RouterLink :to="`/product/${product.product_id}`">
          <h1>{{ product.product_title }}</h1>
          <p>{{ product.offer.store_name }}</p>
          <p>{{ product.offer.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
