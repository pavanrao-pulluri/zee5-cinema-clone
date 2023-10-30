import React from "react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div style={{ textAlign: "center", padding: "40px", marginTop: "120px" }}>
      <h1 style={{ fontSize: "36px" }}>Under Construction</h1>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        We are currently working on our website to improve the Ui and remaining
        features.
      </p>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Please check back later.
      </p>

      <button
        style={{ padding: "10px", background: "#8230c6", color: "#fff" }}
        onClick={handleClick}
      >
        Go To Home
      </button>
    </div>
  );
};

export default UnderConstruction;
