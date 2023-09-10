import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
// import itinerariesReducer from "./reducers/itineraries";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        cities: citiesReducer,
        //itinerariesReducer: itinerariesReducer,
        
    },
});