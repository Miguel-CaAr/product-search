<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useProductsStore } from "@/stores/Products";
const productsStore = useProductsStore();
const productsList = computed(() => productsStore.products);
</script>
<template>
  <section class="container mx-auto p-4">
    <main
      v-if="productsList"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
    >
      <!-- Replace this with your grid items -->
      <div
        v-for="product in productsList.data"
        :key="product.product_id"
        class="mx-auto mt-11 w-50 transform overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-lg"
      >
        <RouterLink :to="`/product/${product.product_id}`">
          <img
            class="h-48 object-cover mx-auto object-center p-2"
            :src="product.product_photos[0]"
            alt="Product Image"
          />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-medium text-gray-900">
              {{ product.product_title }}
            </h2>
            <p class="mb-2 text-base text-gray-700">
              {{ product.offer.store_name }}
            </p>
            <div class="flex items-center">
              <p class="mr-2 text-lg font-semibold text-green-500">
                {{ product.offer.price }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
      <!-- Add more items as needed -->
    </main>
  </section>
</template>

<style scoped></style>
