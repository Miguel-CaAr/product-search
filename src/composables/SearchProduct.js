import axios from "axios";
import { ref } from "vue";
import { useProductsStore } from "@/stores/Products";

export const useSearchProductBy = (isAProductId, value, url) => {
  const param = ref("");
  const useProducts = useProductsStore();

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
      "X-RapidAPI-Key": "7181fc8c00mshfeee7afe9d857a7p1d50ecjsn027cf4dca720",
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };
  const searchProduct = async () => {
    try {
      const response = await axios.request(options);
      useProducts.updateProducts(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  searchProduct();
};
