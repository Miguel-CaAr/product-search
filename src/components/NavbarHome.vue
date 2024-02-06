<script setup>
import { ref } from "vue";
import { useSearchProductBy } from "@/composables/SearchProduct";
import { useRouter } from "vue-router";

const router = useRouter();
const url = "https://real-time-product-search.p.rapidapi.com/search";
const valueInput = ref("");

const submit = () => {
  useSearchProductBy(false, valueInput, url);
  router.push(`/search/${valueInput.value}`);
};
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Search" v-model="valueInput" />
      <button>🔍</button>
    </form>
  </div>
</template>

<style scoped></style>
