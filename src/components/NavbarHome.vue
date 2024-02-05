<script setup>
import { ref } from "vue";
import { useSearchProductBy } from "@/composables/SearchProduct";

const url = "https://real-time-product-search.p.rapidapi.com/search";
const valueInput = ref("");
</script>

<template>
  <div>
    <form @submit.prevent="useSearchProductBy(false, valueInput, url)">
      <input type="text" placeholder="Search" v-model="valueInput" />
      <button>🔍</button>
    </form>
  </div>
</template>

<style scoped></style>
