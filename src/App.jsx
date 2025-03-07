import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoicePortal from "./components/InvoiceGenerationPortal/InvoiceList";
import ProductManagement from "./components/ProductManagementPortal/ProductList";
import ProductDetails from "./components/ProductManagementPortal/ProductDetails";
import InvoiceDetail from "./components/InvoiceGenerationPortal/InvoiceDetail";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/invoices" element={<InvoicePortal />} />
        <Route exact path="/invoices/:invoiceId" element={<InvoiceDetail />} />
        <Route exact path="/products" element={<ProductManagement />} />
        <Route
          exact
          path="/products/:productName"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
