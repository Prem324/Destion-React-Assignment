import { Link } from "react-router-dom";
import { useState } from "react";
import StoreFilter from "../StoreFilter";
import SearchBar from "../SearchBar";
import "./index.css";
const ProductList = ({ products, deleteProduct }) => {
  const [selectedStore, setSelectedStore] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter((product) =>
      selectedStore ? product.storeName === selectedStore : true
    )
    .filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <StoreFilter
        stores={[...new Set(products.map((product) => product.storeName))]}
        selectedStore={selectedStore}
        setSelectedStore={setSelectedStore}
      />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.productId} className="product-card">
            <Link
              to={`/products/${product.productId}`}
              className="product-link"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="product-image"
              />
              <h3 className="product-name">{product.productName}</h3>
            </Link>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-store">Store: {product.storeName}</p>
            <div className="product-actions">
              <Link
                to={`/products/${product.productId}/edit`}
                className="edit-button"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProduct(product.productId)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
