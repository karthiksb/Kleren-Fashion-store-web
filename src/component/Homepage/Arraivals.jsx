import React from "react";
import "./arrivals.css";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

import cart2 from "./cart/cart2.jpg";
import cart1 from "./cart/cart1.jpeg";
import cart3 from "./cart/cart3.png";
import cart4 from "./cart/cart4.jpeg";
import cart5 from "./cart/cart5.jpeg";
import cart6 from "./cart/cart6.jpeg";
import cart7 from "./cart/cart7.jpg";
import cart8 from "./cart/cart8.jpeg";

export default function Arraivals() {
  return (
    <div className="arrivals">
      <div className="arrive">
        <h1>New Arrivals</h1>
        <p>summer collection for modern designs</p>
      </div>
      <div className="roww">
        <div className="col">
          <div className="cartoverlay">
            <img src={cart5} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart3} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart2} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart4} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart1} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart6} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart7} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cartoverlay">
            <img src={cart8} alt="" />
            <div className="information">
              <div className="productinfo">
                <p className="brand">Adidas</p>
                <p>Abstract Element</p>
                <p>$78</p>
              </div>
              <div className="cart">
                <ShoppingCartCheckoutOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
