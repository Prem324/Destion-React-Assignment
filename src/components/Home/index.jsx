import React from "react";
import homeImage from "../../assets/product-invoice-2.jpg";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Manage your invoices and products with ease.</p>
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
