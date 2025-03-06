import React, { useState } from "react";
import ProductList from "../ProductList";
import "./index.css";

function ProductManagement() {
  const [products] = useState([
    {
      id: 1,
      name: "Spray",
      price: 50,
      store: "Store 1",
      productImage:
        "https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg",
    },
    {
      id: 2,
      name: "Camera Lens",
      price: 75,
      store: "Store 2",
      productImage:
        "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "HeadSet",
      price: 100,
      store: "Store 1",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Cool Drinks",
      price: 100,
      store: "Store 1",
      productImage: "https://www.hccb.in/images/RJ405908-1.webp",
    },
    {
      id: 5,
      name: "Milk Products",
      price: 100,
      store: "Store 1",
      productImage:
        "https://gagangiri.co.in/wp-content/uploads/2024/07/product-image-gagangiri.webp",
    },
    {
      id: 6,
      name: "Body Lotions",
      price: 100,
      store: "Store 1",
      productImage:
        "https://t3.ftcdn.net/jpg/00/47/97/64/360_F_47976451_mP8ttiBtPoJ3ymdUWeVGWEndx8OktFbV.jpg",
    },
  ]);
  return (
    <div className="product-management-portal-container">
      <h1>Product Management</h1>
      <div className="product-filters-container">
        <input type="text" placeholder="Search by product name" />
        <select>
          <option>All Stores</option>
          <option>Store 1</option>
          <option>Store 2</option>
        </select>
      </div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductManagement;
