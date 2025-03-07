import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function InvoicePortal() {
  const [invoices] = useState([
    { invoiceId: 1, date: "2025-03-01", total: 100 },
    { invoiceId: 2, date: "2025-03-02", total: 200 },
    { invoiceId: 3, date: "2025-03-03", total: 150 },
    { invoiceId: 4, date: "2025-03-24", total: 180 },
  ]);
  const [filteredDate, setFilteredDate] = useState("");
  const filteredInvoices = invoices.filter((invoice) => {
    return filteredDate ? invoice.date === filteredDate : true;
  });
  return (
    <div className="invoice-portal-container">
      <h1>Invoices List</h1>
      <div className="filter-by-date">
        <input
          type="date"
          value={filteredDate}
          onChange={(e) => setFilteredDate(e.target.value)}
        />
      </div>
      {filteredInvoices.map((invoice) => (
        <div key={invoice.invoiceId}>
          <Link to={`/invoice/${invoice.invoiceId}`}>
            <h1>{invoice.invoiceId}</h1>
            <p>{invoice.date}</p>
            <p>{invoice.total}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InvoicePortal;
