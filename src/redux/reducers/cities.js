import { createReducer } from "@reduxjs/toolkit";
import citiesActions, { filterCities, resetCity } from "../actions/cities";

const initialState = {
  allCities: [],
  filteredCities: [],
  itineraries:[],
  city:null
};

const citiesReducer = createReducer(
  initialState,
  (builder) => {

    builder

      .addCase(citiesActions.loadCities, (state, action) => {
        return { 
          ...state,
          allCities: action.payload,
          filteredCities: action.payload
           };
      })

      .addCase(filterCities, (state, action) => {
        const filteredSearch= state.allCities.filter(
          city => city.name.toLowerCase().includes(action.payload.inputValue)
          )
          let newFilteredCities = filteredSearch
          if(action.payload.selectedItinerary != "All"){
            newFilteredCities = newFilteredCities.filter(
              city => city.itinerary.itinerary=action.payload.selectedItinerary)}
        return {
          ...state,
          filteredCities: newFilteredCities
        }
      })


      .addCase(citiesActions.loadCitiesAsync, (state, action) => {
        return { 
          ...state, 
          allCities: action.payload,
          filteredCities: action.payload
         };
      })

      .addCase(citiesActions.loadCity.fulfilled, (state, action) => {
        return { 
          ...state, 
          city: action.payload,
         };
      }      )


      .addCase(resetCity, (state, action) => {
        return { 
          ...state, 
          city: action.payload,
         };
      });
  }
);

export default citiesReducer;
