import { red } from "@mui/material/colors";
import React from "react";
import "./explore.css";
import wall from "./wall.jpg";

function Explore() {
  return (
    <div className="explore">
      <img src={wall} alt="" className="top" />

      <div className="overlay">
        <div>
          <h2 style={{ color: "#fff" }}>Repair Services</h2>
        </div>
        <div>
          <h1 style={{ color: "#fff" }}>
            Up to <span>70%</span> Off - All t-shirt & Accessories
          </h1>
        </div>
        <div>
          <p style={{ color: "#fff" }}>Explore More</p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
