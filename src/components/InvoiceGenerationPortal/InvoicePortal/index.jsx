import React, { useState } from "react";
import InvoiceList from "../InvoiceList";
import "./index.css";

function InvoicePortal() {
  const [invoices] = useState([
    { id: 1, date: "2025-03-01", total: 100 },
    { id: 2, date: "2025-03-02", total: 200 },
    { id: 3, date: "2025-03-03", total: 150 },
    { id: 4, date: "2025-03-24", total: 180 },
  ]);
  return (
    <div className="invoice-portal-container">
      <h1>Invoice Generation</h1>
      <div className="filter-by-date">
        <input type="date" />
      </div>
      <InvoiceList invoices={invoices} />
    </div>
  );
}

export default InvoicePortal;
