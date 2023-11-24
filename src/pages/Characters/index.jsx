import React, { useEffect, useState } from "react";
import rickAPI from "../../services/api";
import CharactersCard from "../../components/CharactersCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await rickAPI.get("/character");
        setCharacters(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="characters-container">
      <h1>character</h1>
      {characters.map((character) => (
        <CharactersCard key={character.id} character={character} />
      ))}
    </div>
  );
}
