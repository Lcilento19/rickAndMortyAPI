import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

  return (
    <div className="details-container">
      {character && (
        <div>
          <h1>{character.name}</h1>
          <Link to={"/"}>Back Home</Link>

          <img src={character.image} alt="" />
          <p>Status: {character.status}</p>
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <Link to={`/location/${character.id}`}>
            <p>Origin: {character.origin.name}</p>
          </Link>
          <Link to={`/location/${character.id}`}>
            <p>Location: {character.location.name}</p>
          </Link>
          {JSON.stringify(character)}
        </div>
      )}
      <p>Not Characters Found</p>
    </div>
  );
}
