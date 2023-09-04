import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        citiesReducer: citiesReducer
        
    },
});