import React from "react";

const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: backgroundColor || "grey" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
