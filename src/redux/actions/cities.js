import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllCities,
    getCityById
} from "../../pages/services/cityService";

const loadCities = createAction("load_cities", (cities) => {
    return {
        payload: cities,
    };
});

const loadCitiesAsync = createAsyncThunk("load_cities_async", async () => {
    const cities = getAllCities
    return cities

});

export const loadCity = createAsyncThunk("load_city", async (id) => {
    const city = await getCityById(id);
    return city;
});

export const resetCity = createAction("reset_city", () => {
    return {
        payload: null,
    };
});

export const filterCities = createAction("filter_cities", (itinerary, search) => {
    return {
        payload: {
            selectedItinerary: itinerary,
            inputValue: search

        },
    };
}
);


const citiesActions = {
    loadCities,
    loadCitiesAsync,
    loadCity,
    resetCity,
    filterCities
};

export default citiesActions;
