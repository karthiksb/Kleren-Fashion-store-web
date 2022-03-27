import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <h2>About us</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta
          doloremque consequuntur optio saepe rem.
        </p>
      </div>
      <div className="footer-box">
        <h2>More</h2>

        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our mission</a>
          </li>
          <li>
            <a href="#">Our mission</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h2>News letter</h2>

        <div className="mailsend">
          <div className="mail">Enter your mail</div>
          <div className="send"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
