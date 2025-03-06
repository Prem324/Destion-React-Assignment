import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoicePortal from "./components/InvoiceGenerationPortal/InvoicePortal";
import ProductManagement from "./components/ProductManagementPortal/ProductManagement";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<InvoicePortal />} />
        <Route path="/product" element={<ProductManagement />} />
      </Routes>
    </>
  );
}

export default App;
