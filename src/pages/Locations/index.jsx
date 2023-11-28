import React, { useEffect, useState } from "react";
import rickAPI from "../../services/api";
import LocationCard from "../../components/LocationCard";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await rickAPI.get("/location");
        setLocations(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="locations-container">
      <h1>Localidades</h1>
      {locations.map((location) => (
        <LocationCard key={location.name} location={location} />
      ))}
    </div>
  );
}
