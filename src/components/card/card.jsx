import React from "react";
import "../card/card.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={`Image for ${item.id}`} />
      </Link>
      <div className="textContainer">
        <h2 className="titles">
          <Link to={`/${item.id}`}>{item.titles}</Link>
        </h2>
        <p className="address">
          <img src="./img/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./img/bed.png" alt="" />
              <span>{item.bedRooms} bedroom</span>
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <img src="./img/bath.png" alt="" />
              <span>{item.bathRooms} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="./img/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="./img/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
