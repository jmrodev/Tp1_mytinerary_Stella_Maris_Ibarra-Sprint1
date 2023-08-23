import React, { useEffect, useState } from "react";
import CardCity from "../../components/CardCity/Index.jsx";
import { getAllCities } from "../services/cityService.js";
import CityDetails from "../CitiesDetail/Index.jsx";

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
    
    <section className="flex gap-5 flex-wrap p-10 mt-6 justify-content-center 	">
      {cities.map((city) => (
        <CardCity  key={city._id} city={city} />
      ))}
    </section>
  );
};

export default Cities;
