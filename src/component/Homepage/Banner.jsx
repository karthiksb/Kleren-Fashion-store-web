import React from "react";
import "./banner.css";
import ban from "./ban.jpg";

export default function banner() {
  return (
    <div className="banner">
      <div className="quote">
        <h1>India's biggest </h1>
        <h1>Fashion festival </h1>
        <button>Shop now</button>
      </div>
      <div className="model">
        <img src={ban} alt="" />
      </div>
    </div>
  );
}
