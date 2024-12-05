import ProductList from "./ProductList";
import "./Product.css";
import CreateProduct from "./CreateProduct";
import { useState } from "react";

function Product() {
  const [reload, setReLoad] = useState(false);

  const handleReload = () => {
    setReLoad(!reload);
  }
  return (
    <>
      <h2 className="page__title">Danh sách sản phẩm</h2>
      <CreateProduct onReload={handleReload} />
      <ProductList reload={reload} />
    </>
  )
}

export default Product;