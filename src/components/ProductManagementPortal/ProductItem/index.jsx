import React from "react";
import "./index.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img className="product-image" src={product.productImage} />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-store">Store: {product.store}</p>
    </div>
  );
}

export default ProductItem;
