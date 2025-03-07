import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import homeIcon from "../../assets/home.png";
import productIcon from "../../assets/product-2.png";
import invoiceIcon from "../../assets/invoice-2.png";

const Header = () => {
  const navigate = useNavigate();
  const onClickHeaderName = () => {
    navigate("/");
  };
  return (
    <nav>
      <h1 onClick={onClickHeaderName}>Invoices and Product Manager</h1>
      <ul>
        <li>
          <Link to="/" className="link-item">
            <img src={homeIcon} alt="home-icon" />
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link to="/product" className="link-item">
            <img src={productIcon} alt="product-icon" />
            <p>Product Management</p>
          </Link>
        </li>
        <li>
          <Link to="/invoice" className="link-item">
            <img src={invoiceIcon} alt="invoice-icon" />
            <p>Invoice Generation</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
