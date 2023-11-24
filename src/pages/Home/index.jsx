import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Rick and Morty</h1>
      <Link to={"/characters"}>
        <img src="favicon.png" alt="" />
      </Link>
      <Link to={"/locations"}>
        <img src="earth.png" alt="" />
      </Link>
    </div>
  );
}
