import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllCities } from "../services/cityService.js";


const CityDetails = () => {
  const { id } = useParams(); // Obtén el ID de la URL
  const [cityDetails, setCityDetails] = useState(null);
  useEffect(() => {
      // fetch("http://localhost:3000/api/cities")
      //   .then((response) => response.json())
      getAllCities()
        .then((data) => {
          setCityDetails(data);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <div>
      <img src={cityDetails.img} alt={cityDetails.name} />
      <h2>{cityDetails.name}</h2>
      {/* Aquí puedes mostrar otros detalles de la ciudad */}
    </div>
  );
};

export default CityDetails;
