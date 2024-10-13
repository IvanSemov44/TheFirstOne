import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/bigform">BigForm</Link>
        </li>
        <li>
            <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/shopcart">Shop Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
