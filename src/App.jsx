import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoicePortal from "./components/InvoiceGenerationPortal/InvoicePortal";
import ProductManagement from "./components/ProductManagementPortal/ProductManagement";
import ProductDetails from "./components/ProductManagementPortal/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/invoice" element={<InvoicePortal />} />
        <Route exact path="/product" element={<ProductManagement />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
