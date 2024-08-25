import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/img/logo.png" alt=""  />
          <span>Evergreen Estates</span>
        </a>
        <a href="/">Home</a>
        <a href="/aboutus">About</a>
        <a href="./room">Rooms</a>
        <a href="/contactus">Contact</a>
        <a href="/villas">Villas</a>
      </div>
      <div className="right">
        <a href="/sign-in">Sign in</a>
        <a href="/sign-up" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img
            src="/img/menu.png"
            alt=""
            onClick={() => setOpen(!open)} // Toggle open state
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/aboutpage">About</a>
          <a href="/room">Rooms</a>
          <a href="/contactus">Contact</a>
          <a href="/villas">Villas</a>
          <a href="/sign-in">Sign in</a>
          <a href="/sign-up">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
