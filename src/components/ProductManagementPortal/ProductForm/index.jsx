import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
const ProductForm = ({ addProduct, updateProduct, products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!productId;

  const [formData, setFormData] = useState({
    storeName: "",
    productName: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const product = products.find((p) => p.productId === productId);
      if (product) {
        setFormData(product);
      }
    }
  }, [productId, isEditMode, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateProduct({ ...formData, productId });
    } else {
      addProduct(formData);
    }
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>{isEditMode ? "Edit Product" : "Add Product"}</h2>
      <div className="form-group">
        <label>Store Name</label>
        <input
          type="text"
          name="storeName"
          placeholder="Store Name"
          value={formData.storeName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt="Preview"
            className="image-preview"
          />
        )}
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-button">
          {isEditMode ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
