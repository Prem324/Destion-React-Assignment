import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`product/${product.id}`}>
        <img className="product-image" src={product.productImage} />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-store">Store: {product.store}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
