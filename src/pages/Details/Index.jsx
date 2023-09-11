import React from "react";
import { useParams } from "react-router-dom";
import CityDetails from "../../components/Details/Index" 

const Details = () => {
  const { cityId } = useParams();

  // Aquí puedes usar cityId para buscar los detalles de la ciudad en tu estado o realizar una solicitud a la API, según tu configuración.

  return (
    <div>
      <h1>Details Page</h1>
      <CityDetails cityId={cityId} />
    </div>
  );
};

export default Details;
