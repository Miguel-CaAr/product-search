import axios from "axios";
import { ref } from "vue";

export const useSearchProductBy = (isAProductId, value, url) => {
  const products = ref([]);
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
      "X-RapidAPI-Key": "330bee5ea3msh12145925e1b632ep12478fjsn899913bf43b9",
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };
  const searchProduct = async () => {
    try {
      const response = await axios.request(options);
      console.log((products.value = response.data));
    } catch (error) {
      console.error(error);
    }
  };

  searchProduct();
  return products;
};
