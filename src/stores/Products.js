import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  //Datos reactivos
  const products = ref();
  //Metodos
  const updateProducts = (newProducts) => {
    products.value = newProducts;
  };
  //Metodos computados

  //Retorno
  return {
    products,
    updateProducts,
  };
});
