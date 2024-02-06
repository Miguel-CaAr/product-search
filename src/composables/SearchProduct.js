import axios from "axios";
import { ref } from "vue";
import { useProductsStore } from "@/stores/Products";

export const useSearchProductBy = (isAProductId, value, url) => {
  const productsStore = useProductsStore();
  const param = ref("");

  isAProductId ? (param.value = "product_id") : (param.value = "q");

  const options = {
    method: "GET",
    url: url,
    params: {
      [param.value]: value,
      country: "mx",
      language: "es",
    },
    headers: {
      "X-RapidAPI-Key": "b0445131c6msh2cec10f6d94c296p14347cjsn5d13c32f995f",
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };
  const searchProduct = async () => {
    productsStore.showSpinnerHttp(true);
    try {
      const response = await axios.request(options);
      productsStore.updateProducts(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    } finally {
      productsStore.showSpinnerHttp(false);
    }
  };
  searchProduct();
};
