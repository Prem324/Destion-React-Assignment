import React from "react";
import ProductItem from "../ProductItem";
import "./index.css";
import products from "../../../products-content";

function ProductList() {
  return (
    <div className="product-management-portal-container">
      <h1>Products</h1>
      <ProductItem products={products} />
    </div>
  );
}

export default ProductList;
