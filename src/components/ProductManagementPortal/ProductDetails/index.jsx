import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import products from "../../../products-content";
import "./index.css";

function ProductDetails() {
  const { productName } = useParams();
  const product = products.find((a) => a.productName === productName);
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/products");
  };
  return (
    <>
      <IoMdArrowBack className="back-nav" onClick={onClickBack} />
      <div className="product-detail-container">
        <img src={product.imageUrl} alt={product.productName} />
        <div className="product-details">
          <h1>{product.productName}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}/-</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
