import React from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../../assets/product-invoice-1.png";
import "./index.css";

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/product");
    console.log("Get Started");
  };
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Manage your invoices and products with ease.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <div>
        <img className="home-page-image" src={homeImage} alt="home-image" />
      </div>
      <div>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
