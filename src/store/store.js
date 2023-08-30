import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";

 export const store = configureStore({
  //dentro del store agrego los reducers de cities y users

   reducer: {
      citiesReducer: citiesReducer,
      


   }, 
 })