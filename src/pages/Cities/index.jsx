import React, { useEffect, useState, useRef } from "react";
import CardCity from "../../components/CardCity/Index";
import { useSelector, useDispatch } from "react-redux";
import { loadCities, filterCities,loadCitiesAsync } from "../../redux/actions/cities";
import { getAllItineraries } from "../../services/itineraryService";

const Cities = () => {

  const [itineraries, setItineraries] = useState([]);

  const select = useRef(null);

  const inputSearch = useRef(null);

  const dispatch = useDispatch();

  const {filterCities: cities, } = useSelector((state) => state.cities);

  useEffect(() => {
      dispatch(loadCitiesAsync());
      getAllItineraries().then((res) => {
        setItineraries(res.map((item) => item.itinerary));
      }
    )
  }, []);

   
  const handleInput = () => {
    dispatch(filterCities(
      select.current.value,
       inputSearch.current.value
       ));
  };

  return (
    <div>
      <h1 className="text-black m-4 p-2 fs-3 fw-bolder">Argentina</h1>
      <div className="mb-3 d-flex justify-content-center">
        <div className="mb-3">
          <label className="form-label">Cities</label>
          <select
            defaultValue="All"
            className="form-select form-select-lg"
            name=""
            id=""
            onInput={handleInput}
            ref={select}
          >
            <option value="All"> All </option>
            {itineraries.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          className="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
          onInput={handleInput}
          ref={inputSearch}
        />
      </div>

      {/* <div className="row gap-5 m-5">
        {cities.filterCities.map((city) => (
          <CardCity key={city._id} city={city} />
        ))}
      </div>  */}
    </div>
  );
};

export default Cities;
