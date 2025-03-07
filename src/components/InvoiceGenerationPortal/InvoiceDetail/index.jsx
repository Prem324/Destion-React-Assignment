import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { IoMdArrowBack } from "react-icons/io";

import "./index.css";

const InvoiceDetail = () => {
  const { state } = useLocation();
  const invoice = state?.invoice;
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/invoices");
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(33, 37, 41);
    doc.text("Invoice Receipt", 105, 20, { align: "center" });

    doc.setDrawColor(200, 200, 200);
    doc.line(10, 25, 200, 25);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(33, 37, 41);

    doc.text(`Store: ${invoice.storeName}`, 10, 35);
    doc.text(`Order ID: ${invoice.orderId}`, 10, 45);
    doc.text(`Date: ${invoice.date}`, 10, 55);

    doc.setFont("helvetica", "bold");
    doc.text("Item Name", 10, 70);
    doc.text("Quantity", 70, 70);
    doc.text("Price", 110, 70);
    doc.text("Total", 150, 70);
    doc.text("Tax", 180, 70);

    doc.line(10, 75, 200, 75);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    let yPos = 85;
    invoice.items.forEach((item) => {
      doc.text(item.itemName, 10, yPos);
      doc.text(item.quantity.toString(), 70, yPos);
      doc.text(`$${item.dealPrice.toFixed(2)}`, 110, yPos);
      doc.text(`$${item.itemTotal.toFixed(2)}`, 150, yPos);
      doc.text(`$${item.itemTax.toFixed(2)}`, 180, yPos);
      yPos += 10;
    });

    doc.line(10, yPos, 200, yPos);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`Subtotal: $${invoice.subtotal.toFixed(2)}`, 150, yPos + 10);
    doc.text(`Total Tax: $${invoice.totalTax.toFixed(2)}`, 150, yPos + 20);
    doc.text(`Grand Total: $${invoice.grandTotal.toFixed(2)}`, 150, yPos + 30);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Thank you for your purchase!", 105, yPos + 50, {
      align: "center",
    });

    doc.save(`invoice_${invoice.invoiceId}.pdf`);
  };

  if (!invoice) return <div>Invoice not found</div>;

  return (
    <>
      <IoMdArrowBack className="back-nav" onClick={onClickBack} />

      <div className="invoice-detail">
        <h1>Invoice Details</h1>
        <div className="header-info">
          <p>Store: {invoice.storeName}</p>
          <p>Order ID: {invoice.orderId}</p>
          <p>Date: {invoice.date}</p>
        </div>

        <div className="items-list">
          <h3>Items:</h3>
          {invoice.items.map((item) => (
            <div key={item.itemId} className="invoice-item">
              <h4>{item.itemName}</h4>
              <div className="item-details">
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.dealPrice.toFixed(2)}</p>
                <p>Total: ${item.itemTotal.toFixed(2)}</p>
                <p>Tax: ${item.itemTax.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="totals">
          <p>Subtotal: ${invoice.subtotal.toFixed(2)}</p>
          <p>Total Tax: ${invoice.totalTax.toFixed(2)}</p>
          <p className="grand-total">
            Grand Total: ${invoice.grandTotal.toFixed(2)}
          </p>
        </div>
        <div className="download-pdf">
          <button onClick={generatePDF}>Download PDF</button>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
