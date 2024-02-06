import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductsStore = defineStore("products", () => {
  //Datos reactivos
  const products = ref();
  const loadingHttp = ref(true);
  //Metodos
  const updateProducts = (newProducts) => {
    products.value = newProducts;
  };
  const showSpinnerHttp = (show = true) => {
    if (show !== Boolean(show)) {
      show = true;
      console.warn(`Se esperaba un valor booleano pero se recibio un: ${typeof show}, con valor ${show}`);
    } else {
      loadingHttp.value = show;
    }
  };
  //Metodos computados
  const loadingHttpRef = computed(() => loadingHttp.value);
  //Retorno
  return {
    products,
    updateProducts,
    showSpinnerHttp,
    loadingHttpRef,
  };
});
