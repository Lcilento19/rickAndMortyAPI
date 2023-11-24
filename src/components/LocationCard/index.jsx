import React from "react";
import "./styles.css";

export default function LocationCard({ location }) {
  return (
    <div className="card" key={location.name}>
      <h2>{location.name}</h2>
     
    </div>
  );
}
