import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/product-invoice-11.png";

import "./index.css";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "prem" && password === "prem@2023") {
      setLoggedIn(true);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-route-container">
      <div className="login-image">
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="login-container">
        <h1>User Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username: prem</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password: prem@2023</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
