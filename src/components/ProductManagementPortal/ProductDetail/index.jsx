import { useParams, useNavigate } from "react-router-dom";
import "./index.css";

const ProductDetail = ({ products, deleteProduct }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.productId === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(product.productId);
      navigate("/products");
    }
  };

  return (
    <div className="product-detail">
      <h2>{product.productName}</h2>
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="detail-image"
      />
      <p className="detail-description">{product.description}</p>
      <p className="detail-price">Price: ${product.price}</p>
      <p className="detail-store">Store: {product.storeName}</p>
      <div className="detail-actions">
        <button
          onClick={() => navigate(`/products/${product.productId}/edit`)}
          className="edit-button"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
        <button onClick={() => navigate("/products")} className="back-button">
          Back to List
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
