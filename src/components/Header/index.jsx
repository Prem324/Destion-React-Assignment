import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import homeIcon from "../../assets/home.png";
import productIcon from "../../assets/product-2.png";
import invoiceIcon from "../../assets/invoice-2.png";
import logoutIcon from "../../assets/log-out.png";

function Header({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const onClickHeaderName = () => {
    navigate("/");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/login");
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
          <Link to="/invoices" className="link-item">
            <img src={invoiceIcon} alt="invoice-icon" />
            <p>Invoice Portal</p>
          </Link>
        </li>
        <li>
          <Link to="/products" className="link-item">
            <img src={productIcon} alt="product-icon" />
            <p>Product Management</p>
          </Link>
        </li>

        {loggedIn && (
          <div onClick={handleLogout} className="logout-button-container">
            <img className="logout-icon" src={logoutIcon} />
            <span>Logout</span>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Header;
