import axios from "axios";
const BASE_URL = "https://cdn.ggumim.co.kr/test/image_product_link.json";
export const getProductInfo = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
