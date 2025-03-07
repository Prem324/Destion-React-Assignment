import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoicePortal from "./components/InvoiceGenerationPortal/InvoiceList";
import ProductManagement from "./components/ProductManagementPortal/ProductList";
import ProductDetails from "./components/ProductManagementPortal/ProductDetails";
import InvoiceDetail from "./components/InvoiceGenerationPortal/InvoiceDetail";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* Pass loggedIn and setLoggedIn to Header */}
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
          element={loggedIn ? <ProductManagement /> : <Navigate to="/login" />}
        />
        <Route
          path="/products/:productName"
          element={loggedIn ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
