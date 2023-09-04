import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCity from "../CardCity/Index.jsx";
import citiesActions from "../../redux/actions/cities";
import UnderConstruction from "../UnderConstruction/Index.jsx";

const CitiesDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesActions.loadCity(id));

    return () => dispatch(citiesActions.resetCity());
  }, []);

  const cityStore = useSelector((store) => store.cities.city);
  console.log(cityStore);

  return (
    <>
      <h1 className="text-black m-4 ">Argentina</h1>
      <div className="mb-3"></div>
      <div className="row gap-5 m-5">
        {cityStore ? (
          <CardCity key={cityStore._id} city={cityStore} />
        ) : (
          <UnderConstruction />
        )}
      </div>
    </>
  );
};

export default CitiesDetails;
