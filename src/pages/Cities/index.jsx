import React, { useEffect, useState } from "react";
import CardCity from "../../components/CardCity/Index.jsx";
import { getAllCities } from "../services/cityService.js";
import CityDetails from "../../components/CitiesDetail/Index.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { citiesActions } from "../../redux/actions/citiesActions.js";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantity, setQuantity] = useState(15); // Cantidad de ciudades a mostrar

  const citiesInstore = useSelector(store => store.citiesReducer.cities);
  console.log(citiesInstore);

  const dispatch = useDispatch ()

  useEffect(() => {
    getAllCities().then((response) => {

      setCities(response);
      dispatch (citiesActions.add_cities(response.data))
    });

  }, []);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const citiesToRender = filteredCities.slice(0, quantity);

  return (
    <div>
      <h1 className="text-black m-4 p-2 fs-3 fw-bolder">Argentina</h1>
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="row gap-5 m-5">
        {citiesToRender.map((city) => (
          <CardCity key={city._id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
