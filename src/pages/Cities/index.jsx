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
    //getAllCities(query).then(setCities);
    getAllCities(query).then((data) => {
      setCities(data);
    }
    ).catch((error) => console.log(error));
    

  };

  return ( <div>
    <h2 className="text-center mb-2">Cities</h2>
    <div className="d-flex flex-wrap gap-3 justify-center">
      <div className="col-10">
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Cities</label>
            <select
              defaultValue="all"
              className="form-select form-select-lg"
              name=""
              id=""
              onInput={handleInput}
              ref={select}
            >
             
             
              <option defaultValue="all" selected>
                {" "}
                All{" "}
              </option>
            
            {/* {
              cities.map((city) => (
                <option key={city} defaultValue={city}>
                  {city}
                </option>
              ))

            } */}

               {/* {{cities.map((city) => (
                <option key={city} defaultValue={city}>
                  {city}
                </option>
              ))} } */}


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
            ref={inputBusqueda}
          />
        </div>
      </div>
      {cities.map((city) => (
        <CardCity key={city._id} city={city} />
      ))}
    </div>
  </div>
);
};
//     <section className="flex gap-5 flex-wrap p-10 mt-6 justify-content-center 	">
//       {cities.map((city) => (
//         <CardCity  key={city._id} city={city} />
//       ))}
//     </section>
//   );
// };




export default Cities;
