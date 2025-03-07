import React, { useState } from "react";
import ProductItem from "../ProductItem";
import "./index.css";
import products from "../../../products-content";

function ProductList() {
  const [searchInput, setSearchInput] = useState("");
  const [filterStore, setFilterStore] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const matchesStore = filterStore ? product.storeName === filterStore : true;
    return matchesSearch && matchesStore;
  });

  return (
    <div className="product-management-portal-container">
      <h1>Products</h1>
      <div className="product-filters-container">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select
          value={filterStore}
          onChange={(e) => setFilterStore(e.target.value)}
        >
          <option value="">All Stores</option>
          <option value="Amazon">Amazon</option>
          <option value="Apple Store">Apple Store</option>
          <option value="Best Buy">Best Buy</option>
          <option value="Costco">Costco</option>
          <option value="Home Depot">Home Depot</option>
          <option value="IKEA">IKEA</option>
          <option value="Nike">Nike</option>
          <option value="Starbucks">Startbucks</option>
          <option value="Target">Target</option>
          <option value="Walmart">Walmart</option>
        </select>
      </div>
      <ProductItem products={filteredProducts} />
    </div>
  );
}

export default ProductList;
