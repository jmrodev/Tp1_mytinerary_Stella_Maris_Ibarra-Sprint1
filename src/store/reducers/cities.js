import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";

const initialState = {
  cities: [
    {
      _id: "",
      name: "",
      img: "",
      description: "",
    },
  ],
};

const citiesReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(citiesActions.getCities.fulfilled, (state, action) => {
        console.log("createReducer ", action.payload.cities);
        const newState = { ...state, cities: action.payload.cities };
        return newState;
      })
      .addCase(citiesActions.filterCitiesById.fulfilled, (state, action) => {
        console.log("createReducer ", action.payload.city);
        const updatedCities = state.cities.map(city =>
          city._id === action.payload.city._id ? action.payload.city : city
        );
        const newState = { ...state, cities: updatedCities };
        return newState;
      })
      .addCase(citiesActions.addCity.fulfilled, (state, action) => {
        console.log("createReducer ", action.payload.city);
        state.cities.push(action.payload.city);
      })
      .addCase(citiesActions.updateExistingCity.fulfilled, (state, action) => {
        console.log("createReducer ", action.payload.city);
        const updatedCities = state.cities.map(city =>
          city._id === action.payload.city._id ? action.payload.city : city
        );
        const newState = { ...state, cities: updatedCities };
        return newState;
      })
      .addCase(citiesActions.removeCity.fulfilled, (state, action) => {
        console.log("createReducer ", action.payload.id);
        state.cities = state.cities.filter(city => city._id !== action.payload.id);
      });
  }
);

export default citiesReducer;
