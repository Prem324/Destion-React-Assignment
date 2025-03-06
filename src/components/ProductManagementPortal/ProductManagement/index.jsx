import React, { useState, useEffect } from "react";
import ProductList from "../ProductList";
import "./index.css";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStore, setFilterStore] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const mockProducts = [
          {
            id: 1,
            name: "Spray",
            price: 50,
            store: "Beauty Store",
            productImage:
              "https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg",
          },
          {
            id: 2,
            name: "Camera Lens",
            price: 75,
            store: "Tech Store",
            productImage:
              "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpg",
          },
          {
            id: 3,
            name: "HeadSet",
            price: 100,
            store: "Tech Store",
            productImage:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            id: 4,
            name: "Cool Drinks",
            price: 100,
            store: "Food Store",
            productImage: "https://www.hccb.in/images/RJ405908-1.webp",
          },
          {
            id: 5,
            name: "Milk Products",
            price: 100,
            store: "Food Store",
            productImage:
              "https://gagangiri.co.in/wp-content/uploads/2024/07/product-image-gagangiri.webp",
          },
          {
            id: 6,
            name: "Body Lotions",
            price: 100,
            store: "Beauty Store",
            productImage:
              "https://t3.ftcdn.net/jpg/00/47/97/64/360_F_47976451_mP8ttiBtPoJ3ymdUWeVGWEndx8OktFbV.jpg",
          },
        ];
        setProducts(mockProducts);
      } catch (error) {
        setError("Failed to fetch products", error);
      }
    };
    fetchedProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStore = filterStore ? product.store === filterStore : true;
    return matchesSearch && matchesStore;
  });

  return (
    <div className="product-management-portal-container">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h1>Product Management</h1>
      <div className="product-filters-container">
        <input
          type="text"
          placeholder="Search by product name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterStore}
          onChange={(e) => setFilterStore(e.target.value)}
        >
          <option value="">All Stores</option>
          <option value="Tech Store">Tech Store</option>
          <option value="Beauty Store">Beauty Store</option>
          <option value="Food Store">Food Store</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductManagement;
