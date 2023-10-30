import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setErrorMessage("Please provide both email and password.");
      return;
    }

    // Retrieve users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if a user with the provided email and password exists in local storage
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Handle successful login (e.g., store user token, redirect)
      setErrorMessage("");
      setSuccessMessage("Login successful. Redirecting...");

      // Store the user's name in local storage
      localStorage.setItem("loggedInUser", user.name);

      window.location.href = "/";
      // Here, you can implement the logic to store user data or redirect to another page
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2>Login to ZEE5</h2>
        <p className="register-subtext">
          Create an account to continue enjoying uninterrupted video and
          personalized experience.
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            autoComplete="current-password"
          />
          <div className="terms-and-policy">
            By proceeding you agree to our
            <Link to="#" className="terms-link">
              Terms of Services
            </Link>{" "}
            &
            <Link to="#" className="privacy-link">
              Privacy Policy
            </Link>
          </div>
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="register-link">
          New to ZEE5? <Link to="/signup">Register</Link>{" "}
          {/* Link to the registration page */}
        </p>
      </div>
    </div>
  );
};

export default Login;
