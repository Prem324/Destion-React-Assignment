import React from "react";
import "./index.css";

function InvoiceItem({ invoice }) {
  return (
    <div className="invoice-item">
      <h2 className="invoice-id">Invoice ID: {invoice.id}</h2>
      <p className="invoice-date">Date: {invoice.date}</p>
      <p className="invoice-total">Total: ${invoice.total}</p>
    </div>
  );
}

export default InvoiceItem;
