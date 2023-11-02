import React from "react";
import "./arrowCarousel.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "grey",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        color: "red",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
