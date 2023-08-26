import React from "react";
import { FaRandom, FaComments, FaBroadcastTower } from "react-icons/fa";
export default function Actions({ isInSidebar }) {
  return (
    <div
      className="nav-actions f-poppins text-light trans-c-03"
      style={
        isInSidebar
          ? {
              display: "flex",
              background: "var(--dark)",
              marginInline: "0px",
              borderRadius: "0px",
            }
          : {}
      }
    >
      <span>
        <FaBroadcastTower size={20} />
        <p>Watch Togather</p>
      </span>
      <span>
        <FaRandom size={20} />
        <p>Random</p>
      </span>
      {!isInSidebar && (
        <span>
          <FaComments size={20} />
          <p>Community</p>
        </span>
      )}
    </div>
  );
}
