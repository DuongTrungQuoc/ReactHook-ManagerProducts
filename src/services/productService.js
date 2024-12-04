export const getProductList = async () => {
  const response = await fetch("http://localhost:3000/products");
  const result = await response.json();
  return result;
}