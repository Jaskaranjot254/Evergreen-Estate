// src/Footer.js
import React from "react";
import "../footer/Footer.css";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
            <span>Evergreen Estates</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non bibendum sit non congue
            pharetra pulvinar leo. Sed ut amet ipsum.
          </p>
        </div>
        <div className="footer-links">
          <div className="quick-links">
            <h4>Quick link</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Sell</a>
              </li>
              <li>
                <a href="#">Rent</a>
              </li>
            </ul>
          </div>
          <div className="support-links">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Get in touch</h4>
            <p>hello@wealthome.com</p>
            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
            <div className="social-icons">
              <a href="#">
                <RiFacebookBoxLine />
              </a>
              <a href="#">
                <RiInstagramLine />
              </a>
              <a href="#">
                {" "}
                <RiTwitterLine />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <h3> &copy; Copyright All Rights Reserved| Evergreen Estate</h3>
      </div>
    </footer>
  );
}

export default Footer;
