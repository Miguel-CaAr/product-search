<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/Products";

const route = useRoute();
const productID = ref();
const productsStore = JSON.parse(useProductsStore().products);
productID.value = route.params.id;
console.log(productsStore);
// const product = productsStore.find(product => product.)
</script>

<template>
  <h1>Product Name:</h1>
</template>

<style scoped></style>
