import React from "react";
import "./home.css";
import Banner from "./Banner";
import Featured from "./Featured";
import Explore from "./Explore";
import Arraivals from "./Arraivals";
import Offers from "./Offers";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Featured />
      <Explore />
      <Arraivals />
      <Offers />
      <Footer />
    </div>
  );
}
