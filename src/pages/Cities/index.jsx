import React, { useEffect, useState } from "react";
import CardCity from "../../components/CardCity/Index.jsx";
import { getAllCities } from "../services/cityService.js";
import CityDetails from "../CitiesDetail/Index.jsx";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllCities().then((response) => {
      setCities(response);
    });
  }, []);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 

  return (
    <div>
      <h1>List of Cities</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="row">
        {filteredCities.map((city) => (
          <CardCity key={city._id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
