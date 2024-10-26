import React from "react";

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button className={`btn ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default TabButton;
