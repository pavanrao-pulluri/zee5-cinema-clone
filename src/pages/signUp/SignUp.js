import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../signUp/signUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Check if user with the same email already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setErrorMessage("User with this email already exists.");
      return;
    }

    // Store user data in local storage
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Reset form fields and show success message
    setName("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setSuccessMessage("Registration successful. Please log in.");

    setTimeout(() => {
      window.location.href = "/login"; // Replace '/login' with the actual login page URL
    }, 1000);
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <h2 className="register-heading">Create a new account</h2>
        <p className="register-subtext">
          Create an account to continue enjoying uninterrupted video and
          personalised experience
        </p>

        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="register-input"
            autoComplete="username"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
            autoComplete="current-password" // Add autoComplete attribute
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
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="login-link">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
