import React from "react";
import "./featured.css";
import cart2 from "./cart/cart2.jpg";
import cart1 from "./cart/cart1.jpeg";
import cart3 from "./cart/cart3.png";
import cart4 from "./cart/cart4.jpeg";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

export default function Featured() {
  return (
    <div className="featured">
      <div className="heading">
        <h1>Featured Products</h1>
      </div>

      <div className="products">
        <div className="product">
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
        <div className="product">
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
        <div className="product">
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
        <div className="product">
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
      </div>
    </div>
  );
}
