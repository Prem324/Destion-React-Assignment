import React from "react";
import homeImage from "../../assets/product-invoice-1.png";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Manage your invoices and products with ease.</p>
        <button>Get Started</button>
      </div>
      <div>
        <img className="home-page-image" src={homeImage} alt="home-image" />
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
