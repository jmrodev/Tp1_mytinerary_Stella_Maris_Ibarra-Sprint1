import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllCities,
    getCityById,
    createCity,
    updateCity,
    deleteCity,
} from "../../pages/services/cityService";

const getCities = createAsyncThunk("getCities", async () => {
    try {
        const response = await getAllCities();
        return { cities: response.data };
    } catch (error) {
        return { cities: [] };
    }
});

const filterCitiesById = createAsyncThunk("filterCitiesById", async (id) => {
    try {
        const response = await getCityById(id);
        return { cities: response.data };
    } catch (error) {
        return { cities: [] };
    }
});

const addCity = createAsyncThunk("addCity", async (city) => {
    try {
        const response = await createCity(city);
        return { city: response.data };
    } catch (error) {
        return { city: null };
    }
});

const updateExistingCity = createAsyncThunk(
    "updateExistingCity",
    async ({ id, city }) => {
        try {
            const response = await updateCity(id, city);
            return { city: response.data };
        } catch (error) {
            return { city: null };
        }
    }
);

const removeCity = createAsyncThunk("removeCity", async (id) => {
    try {
        const response = await deleteCity(id);
        return { id: response.data.id };
    } catch (error) {
        return { id: null };
    }
});


const citiesActions = {
    getCities,
    filterCitiesById,
    addCity,
    updateExistingCity,
    removeCity,
};

export default citiesActions;
