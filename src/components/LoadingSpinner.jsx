import React from "react";
import { FaSpinner } from "react-icons/fa";
import { FiCommand } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <FiCommand size={30} className="spinner" color="white" />
      <h4 style={{ color: "white", fontFamily: "Poppins" }}>Loading...</h4>
    </div>
  );
}
