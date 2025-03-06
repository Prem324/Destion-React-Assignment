import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link className="product-details-link" to={`product/${product.id}`}>
        <img className="product-image" src={product.productImage} />
        <h2 className="product-name">{product.name}</h2>
      </Link>
    </div>
  );
}

export default ProductItem;
