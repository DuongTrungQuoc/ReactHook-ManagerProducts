import { get, post, delele, patch } from "../utils/request";

export const getProductList = async () => {
  const result = await get("products");
  return result;
}

export const createProduct = async (option) => {
  const result = await post("products", option);
  return result;
}

export const deleleProduct = async (id) => {
  const result = await delele(`products/${id}`);
  return result;
}

export const editProduct = async (id, option) => {
  const result = await patch(`products/${id}`, option);
  return result;
}