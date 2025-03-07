import React from "react";
import { useLocation, useParams } from "react-router-dom";

function InvoiceDetail() {
  const { state } = useLocation();
  const { invoiceId } = useParams();
  const invoice = state?.invoice;
  return (
    <div>
      <h1>Invoice Detail</h1>
      <div>
        <h2>{invoice.invoiceId}</h2>
      </div>
    </div>
  );
}

export default InvoiceDetail;
