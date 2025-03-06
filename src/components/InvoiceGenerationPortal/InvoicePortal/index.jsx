import React, { useState } from "react";
import InvoiceList from "../InvoiceList";

function InvoicePortal() {
  const [invoices] = useState([
    { id: 1, date: "2025-03-01", total: 100 },
    { id: 2, date: "2025-03-02", total: 200 },
    { id: 3, date: "2025-03-03", total: 150 },
  ]);
  return (
    <div>
      <h1>Invoice Generation</h1>
      <div>
        <input type="date" />
      </div>
      <InvoiceList invoices={invoices} />
    </div>
  );
}

export default InvoicePortal;
