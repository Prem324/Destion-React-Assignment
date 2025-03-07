import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function ProductItem({ products }) {
  return (
    <div className="products-list-container">
      {products.map((product) => (
        <div key={product.productId} className="product-item">
          <Link
            className="product-details-link"
            key={product.productName}
            to={"/products/" + product.productName}
          >
            <img className="product-image" src={product.imageUrl} />
            <p className="product-name">{product.productName}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
