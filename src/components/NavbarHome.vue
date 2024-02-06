<script setup>
import { ref } from "vue";
import { useSearchProductBy } from "@/composables/SearchProduct";
import { useRouter } from "vue-router";

const router = useRouter();
const url = "https://real-time-product-search.p.rapidapi.com/search";
const valueInput = ref("");

const submit = () => {
  useSearchProductBy(false, valueInput.value, url);
  router.push(`/search/${valueInput.value}`);
};
</script>

<template>
  <main class="py-10">
    <div class="container mx-auto">
      <form @submit.prevent="submit" class="">
        <div class="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Search"
            v-model="valueInput"
            class="w-full rounded-lg border border-gray-400 p-2"
          />
          <button class="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
            Buscar
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
