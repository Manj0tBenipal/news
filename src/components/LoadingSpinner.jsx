import React from "react";
import pikachu from "../media/pikachu.gif";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <CgSpinnerTwoAlt size={30} className="spinner" color="white" />
      <h4 style={{ color: "white", fontFamily: "Poppins" }}>Loading...</h4>
      {/* <img src={pikachu} style={{ height: "100px", width: "150px" }} /> */}
    </div>
  );
}
