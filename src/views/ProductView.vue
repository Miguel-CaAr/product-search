<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/Products";

const route = useRoute();
const productID = ref();
const productsStore = JSON.parse(useProductsStore().products).data;
productID.value = route.params.id;
const product = productsStore.find((product) => product.product_id === productID.value);
console.log(product);
</script>

<template>
  <h1>{{ product.product_title }}</h1>
  <h5>{{ product.product_description }}</h5>
  <p>Oferta en {{ product.offer.store_name }}</p>
  <p>Precio {{ product.offer.price }}</p>
</template>

<style scoped></style>
