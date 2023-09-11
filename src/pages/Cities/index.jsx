
import { createReducer } from "@reduxjs/toolkit";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  getCities  from '../../redux/actions/cities.js'
import CardCity from "../../components/CardCity/Index.jsx"

function CitiesPage() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);


  useEffect(() => {
    // Despacha la acción para obtener las ciudades cuando se monta el componente
    dispatch(getCities());
  }, [dispatch]);
  return (
    <div>
      <h1>Cities</h1>
    
    {cities.cities.map((city) => (
        <CardCity city={city} key={city._id}/>
      ))}
    </div>
  );
}

export default CitiesPage;
