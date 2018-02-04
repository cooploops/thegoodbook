import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) =>
  <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
     <img src="./img//tgb-logo-02.png" alt="The Good Book"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Cart">Cart</Link>
          </li>
        </ul>
        <span 
        className="navbar-text">
          {props.userStatus ? 
          <button onClick={props.logout} className="btn btn-primary">Logout</button>
          :
          <button onClick={props.login} className="btn btn-primary">Login</button>}
        </span>
      </div>
    </div>
  </nav>;

export default Nav;
