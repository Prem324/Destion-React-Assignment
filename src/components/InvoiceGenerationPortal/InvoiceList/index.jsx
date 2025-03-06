import React from "react";
import InvoiceItem from "../InvoiceItem";

function InvoiceList({ invoices }) {
  return (
    <div>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default InvoiceList;
