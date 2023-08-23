import React, { useEffect, useState } from "react";
import CardCity from "../../components/CardCity/Index.jsx";
import { getAllCities } from "../services/cityService.js";

const Cities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCities().then(setData);
  }, []);

  return (
    <div>
      <h2>Lista de Ciudades</h2>
      <ul>
        {data.map((city) => (
          <li key={city.id}>{city.name}</li> // Suponiendo que hay una propiedad "id" y "name" en cada objeto ciudad
        ))}
      </ul>
    </div>
  );
};

export default Cities;
