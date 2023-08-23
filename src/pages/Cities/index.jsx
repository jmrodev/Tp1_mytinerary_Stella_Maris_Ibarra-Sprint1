import React, { useEffect, useState } from "react";
import CardCity from "../../components/CardCity/Index.jsx";
import { getAllCities } from "../services/cityService.js";

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/api/cities")
    //   .then((response) => response.json())
    getAllCities()
      .then((data) => {
        setCities(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h2>Cities</h2>
      {cities.map((city) => (
        <CardCity key={city._id} city={city} />
      ))}
    </section>
  );
};

export default Cities;
