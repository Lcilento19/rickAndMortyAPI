// PersonDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import rickAPI from "../../services/api";
import "./styles.css";

export default function PersonDetails() {
  const [character, setCharacter] = useState(null);
  const { characterID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await rickAPI.get(`/character/${characterID}`);
        setCharacter(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [characterID]);

  const mapStatusToEmoji = (status) => {
    switch (status) {
      case "Alive":
        return "🟢";
      case "Dead":
        return "🔴";
      default:
        return "❔";
    }
  };
  return (
    <div className="details-container">
      {character && (
        <div>
          <h1>{character.name}</h1>
          <Link to={"/"}>Back Home</Link>

          <img src={character.image} alt="" />
          <p>
            Status: {character.status} {mapStatusToEmoji(character.status)}
          </p>
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      )}
      {!character && <p>Character not found</p>}
    </div>
  );
}
