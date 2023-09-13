import React from "react";
import { Link } from "react-router-dom";



const CardCity = ({ city }) => {
  
  return (
    <div className="card col-10 col-md-5 col-xl-3 p-3 mb-2 bg-body">
      <img
        className="card-img-top h-75 justify-conten-center m-2 p-2 g-3"
        src={city.image}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title text-center fw-bold ">{city.name}</h2>
        <p className="card-text text-center">{city.country}</p>
        <Link to={`/cities/${city._id}`} className="btn btn-primary">
          Details
        </Link>
        
      </div>
      
    </div>
  );
};

export default CardCity;