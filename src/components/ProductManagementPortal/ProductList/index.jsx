import React from "react";
import ProductItem from "../ProductItem";
import "./index.css";

function ProductList({ products }) {
  return (
    <div className="products-list-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
