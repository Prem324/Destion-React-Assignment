import React from "react";
import InvoiceItem from "../InvoiceItem";
import "./index.css";

function InvoiceList({ invoices }) {
  return (
    <div className="invoices-list-container">
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default InvoiceList;
