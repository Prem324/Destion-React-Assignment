import React from "react";

function InvoiceItem({ invoice }) {
  return (
    <div className="invoice-item">
      <h2>Invoice ID: {invoice.id}</h2>
      <p>Date: {invoice.date}</p>
      <p>Total: ${invoice.total}</p>
    </div>
  );
}

export default InvoiceItem;
