import React from "react";
import "./Card.css"


const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul className="testimon-text">
        <li className="testimon-name">
          <strong>{props.name}</strong> 
        </li>
        <li>"
          {props.quote}
          "
        </li>
      </ul>
    </div>
  </div>
);

export default Card;