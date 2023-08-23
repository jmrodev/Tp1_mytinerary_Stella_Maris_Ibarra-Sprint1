import React, { useEffect, useState ,useRef } from "react";
import CardCity from "../../components/CardCity/Index.jsx";
import { getAllCities } from "../services/cityService.js";
import CityDetails from "../CitiesDetail/Index.jsx";

const Cities = () => {
  const [cities, setCities] = useState([]);

  const select = useRef(null);
  const inputBusqueda = useRef(null);

  useEffect(() => {
    // fetch("http://localhost:3000/api/cities")
    //   .then((response) => response.json())
    getAllCities()
      .then((data) => {
        setCities(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInput = () => {
    const city = select.current.value;
    const search = inputBusqueda.current.value;
    let query = `?`;
    if (city !== "All") {
      query += "city=" + city + "&";
    }
    if (search) {
      query += "name=" + search;
    }
    getAllCities(query).then(setCities);
  };

  return (
    
    <section className="flex gap-5 flex-wrap p-10 mt-6 justify-content-center 	">
      {cities.map((city) => (
        <CardCity  key={city._id} city={city} />
      ))}
    </section>
  );
};




export default Cities;
