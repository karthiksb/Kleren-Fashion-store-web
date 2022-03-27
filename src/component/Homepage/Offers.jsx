import React from "react";
import "./offers.css";
import album from "./album.jpg";
import album2 from "./album2.jpg";
import album3 from "./album3.jpg";
import album4 from "./album4.jpg";
import album5 from "./album5.jpg";

function Offers() {
  return (
    <div className="offers">
      <div className="top">
        <div className="top-left">
          <img className="img1" src={album} alt="" />
          <div className="deal1">
            <div>
              <p className="p1">Crazy deals</p>
            </div>
            <div>
              <h1>Buy 1 get 1 free</h1>
            </div>
            <div>
              <p>The best classic dress is on sale at cara</p>
            </div>
          </div>
        </div>
        <div className="top-right">
          <img className="img1" src={album2} alt="" />
          <div className="deal2">
            <div>
              <p className="p1">spring/summer</p>
            </div>
            <div>
              <h1>Upcoming season</h1>
            </div>
            <div>
              <p>The best classic dress is on sale at cara</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-cards">
          <div className="bottom-card">
            <img src={album3} alt="" />

            <div className="blackoverlay">
              <h1>SEASONAL SALE</h1>
            </div>
          </div>
          <div className="bottom-card">
            <img src={album4} alt="" />
            <div className="blackoverlay">
              <h1>DENIMS</h1>
            </div>
          </div>
          <div className="bottom-card">
            <img src={album5} alt="" />
            <div className="blackoverlay">
              <h1>T-SHIRTS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
