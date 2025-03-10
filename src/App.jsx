import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoicePortal from "./components/InvoiceGenerationPortal/InvoiceList";
import ProductDetails from "./components/ProductManagementPortal/ProductDetail";
import InvoiceDetail from "./components/InvoiceGenerationPortal/InvoiceDetail";
import Login from "./components/Login";
import products from "./data/productsData";
import ProductDetail from "./components/ProductManagementPortal/ProductDetail";
import ProductList from "./components/ProductManagementPortal/ProductList";
import ProductForm from "./components/ProductManagementPortal/ProductForm";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [productsList, setProductsList] = useState(products);

  const addProduct = (newProduct) => {
    setProductsList([
      ...productsList,
      { ...newProduct, productId: `PROD${productsList.length + 1}` },
    ]);
    toast.success("Product added successfully!");
  };

  const updateProduct = (updatedProduct) => {
    setProductsList(
      productsList.map((product) =>
        product.productId === updatedProduct.productId
          ? updatedProduct
          : product
      )
    );
    toast.success("Product updated successfully!");
  };

  const deleteProduct = (productId) => {
    setProductsList(
      productsList.filter((product) => product.productId !== productId)
    );
    toast.success("Product deleted successfully!");
  };

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? <Navigate to="/" /> : <Login setLoggedIn={setLoggedIn} />
          }
        />
        <Route
          path="/"
          element={loggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/invoices"
          element={loggedIn ? <InvoicePortal /> : <Navigate to="/login" />}
        />
        <Route
          path="/invoices/:invoiceId"
          element={loggedIn ? <InvoiceDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/products"
          element={
            loggedIn ? (
              <ProductList
                products={productsList}
                deleteProduct={deleteProduct}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/products/new"
          element={
            loggedIn ? (
              <ProductForm
                addProduct={addProduct}
                updateProduct={updateProduct}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/products/:productId"
          element={
            loggedIn ? (
              <ProductDetail
                products={productsList}
                deleteProduct={deleteProduct}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/products/:productId/edit"
          element={
            loggedIn ? (
              <ProductForm
                addProduct={addProduct}
                products={productsList}
                updateProduct={updateProduct}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/products/:productName"
          element={loggedIn ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
