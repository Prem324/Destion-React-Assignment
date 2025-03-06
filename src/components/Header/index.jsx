import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/invoice">Invoice Portal</Link>
      </li>
      <li>
        <Link to="/product">Product Portal</Link>
      </li>
    </nav>
  );
};

export default Header;
