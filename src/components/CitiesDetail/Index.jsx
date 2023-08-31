import  React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCityById } from '../../pages/services/cityService.js';
import CardCity from '../CardCity/Index.jsx'; 
import UnderConstruction from '../UnderConstruction/Index.jsx';

const CitiesDetails = () => {

  const [city, setCity] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCityById(id).then((response) => {
      setCity(response.data);
    });
  }
  , [id]);

    const goBack = () => {
        window.history.back();

  }

return (

  
    <>
      <h1 className="text-black m-4 ">Argentina</h1>

      <button onClick={goBack}>
       Go back
    </button>
    
      <div className="mb-3 ">
        {/* <input
          type="text"
          placeholder="Search city..."
        /> */}
      </div>
      <div className="row gap-5 m-5">
        
          <CardCity key={city._id} city={city} />
        
      </div>
     <UnderConstruction/>
     </>
   
  );}

export default CitiesDetails;