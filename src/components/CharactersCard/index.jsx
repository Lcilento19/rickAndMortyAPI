import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function CharactersCard({ character }) {
  return (
    <Link className="link" to={`/details/${character.id}`}>
      <div className="card" key={character.id}>
        <h2>{character.name}</h2>
        <img
          className="thumbnail"
          src={character.image}
          alt={`${character.name} thumbnail`}
        />
      </div>
    </Link>
  );
}
