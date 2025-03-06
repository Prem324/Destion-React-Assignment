import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>

        <li>
          <Link to="/product" className="link-item">
            Product
          </Link>
        </li>
        <li>
          <Link to="/invoice" className="link-item">
            Invoice
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
