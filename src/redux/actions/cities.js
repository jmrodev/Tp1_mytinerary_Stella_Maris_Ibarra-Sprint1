import { createAction,createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCities } from "../../services/cityService";

export const loadCities = createAction("load_cities",(payload)=>{
    return {
        payload
    }

});


export const loadCitiesAsync = createAsyncThunk("load_cities_async",async()=>{
   try {
     
         const response = await getAllCities();
            // console.log("response loadcitiesasync",response.data.data);
            return response.data;
   } catch (error) {
         console.log("error",error);
            return []
              
   }
});



export  const filterCities = createAction("filter_cities",(itinerary,search)=>{
    return {
        payload: {
           selectedItinerary: itinerary,
            inputValue : search
        }
    }
}   )

