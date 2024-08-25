import React from "react";
import '../ContactUs/contactus.css'
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const ContactUS = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="./img/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+001 1234 999</span>
              </div>
              <div>
                <p>Email</p>
                <span>zk@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiInstagramLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiTwitterLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUS;
