import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import invoices from "../../../data/invoices.json";
import "./index.css";

function InvoiceList() {
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);
  const [filteredDate, setFilteredDate] = useState("");

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch = invoice.items.some((item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesDate = filteredDate ? invoice.date === filteredDate : true;

    return matchesSearch && matchesDate;
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading invoices...</div>;

  return (
    <div className="invoice-list">
      <h1>Invoices List</h1>
      <div className="invoices-filters-container">
        <input
          type="text"
          placeholder="Search by item name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="filter-by-date">
          <p>Filter by Date : </p>
          <input
            className="date-input"
            type="date"
            value={filteredDate}
            onChange={(e) => setFilteredDate(e.target.value)}
          />
        </div>
      </div>
      {filteredInvoices.map((invoice) => (
        <div key={invoice.invoiceId} className="invoice-card">
          <Link
            className="invoice-link"
            to={`/invoices/${invoice.invoiceId}`}
            state={{ invoice }}
          >
            <h2>{invoice.storeName}</h2>
            <p>Order ID: {invoice.orderId}</p>
            <p>Date: {invoice.date}</p>
            <p>Grand Total: ${invoice.grandTotal.toFixed(2)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InvoiceList;
