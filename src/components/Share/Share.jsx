import React from "react";
import "./share.css";
import share from "../../media/share.gif"
export default function Share() {
  return (
    <div className="share-app d-flex a-center f-poppins">
      <img src={share} alt="share"/>
      <div>
        <p className="primary">Share Warding</p>
        <p>to your friends</p>
      </div>
    </div>
  );
}
