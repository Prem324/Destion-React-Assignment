import React from "react";

function ProductDetails({ product }) {
  return (
    <div>
      <img src={product.productImage} />
    </div>
  );
}

export default ProductDetails;
