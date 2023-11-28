import React from "react";
import "./styles.css";

export default function LocationCard({ location }) {
  async function handleclick() {
    alert("Não temos mais informações deste planeta!");
  }
  return (
    <div className="card" key={location.name}>
      <button onClick={handleclick} >
        <h2>{location.name}</h2>
        <p>{location.dimension}</p>
      </button>
    </div>
  );
}
