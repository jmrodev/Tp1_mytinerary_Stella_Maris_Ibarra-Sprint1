import React, { useEffect, useState, useRef } from "react";
import CardCity from "../../components/CardCity/Index";
import citiesActions from "../../redux/actions/cities";
import { useDispatch, useSelector } from "react-redux";

const Cities = () => {
 
  const [itineraries, setItineraries] = useState([]);

  const select = useRef(null);
  const inputSearch = useRef(null);

  const citiesStore = useSelector((store) => store.cities );
  console.log(citiesStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesActions.getCities());
  }
  , []);

  const handleInput=()=>{
    dispatch(citiesActions.filterCities(select.current.value,inputSearch.current.value));
  }

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

      <div className="row gap-5 m-5">
        {citiesStore.filterCities.map((city) => (
          <CardCity key={city._id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
