import React from "react";
import { useParams } from "react-router-dom";
import products from "../../../products-content";
import "./index.css";

function ProductDetails() {
  const { productName } = useParams();
  const product = products.find((a) => a.productName === productName);
  return (
    <div className="product-detail-container">
      <img src={product.imageUrl} alt={product.productName} />
      <div className="product-details">
        <h1>{product.productName}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}/-</p>
      </div>
    </div>
  );
}

export default ProductDetails;
