import { createReducer } from "@reduxjs/toolkit";
import { filterCities, loadCities, loadCitiesAsync } from "../actions/cities";


const initialState = {
    cities: [],
    filteredEvents : []
}

const citiesReducer = createReducer(initialState, (builder) => {
    builder

        .addCase(loadCities, (actualState, action) => {

            return {
                ...actualState,
                cities: action.payload
            }
        })

        .addCase(loadCitiesAsync.fulfilled, (actualState, action) => {

            return {
                ...actualState,
                cities: action.payload,
                filteredEvents: action.payload
            }
        })

});

export default citiesReducer;