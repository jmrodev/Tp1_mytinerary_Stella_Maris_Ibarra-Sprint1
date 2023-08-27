import React from "react";
import { Link } from "react-router-dom";



const CardCity = ({ city }) => {
  return (
    <div className="card col-10 col-md-5 col-xl-3 p-3 mb-2 bg-body">
      <img
        className="card-img-top h-75 justify-conten-center m-2 p-2 g-3"
        src={city.img}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title text-center fw-bold ">{city.name}</h2>
      </div>
      <div className="d-flex justify-end px-1 py-1 ">
        <Link className="btn btn-primary btn-sm text-black" to={`/cities/${city._id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default CardCity;
