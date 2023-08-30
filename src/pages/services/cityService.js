import axios from 'axios';


const API_URL = 'http://localhost:3000/api/cities';

const citiesQueries = axios.create( {
baseURL: API_URL
} );


export const getAllCities = async (queryParams = "") => {
    try {
        const response = await citiesQueries(queryParams);
       
        return response.data;
        
    }catch (error) {
        return []
    }
}

export const getCityById = async (id) => {
    try {
        const response = await citiesQueries.get(`/${id}`);
        return response.data;
    }catch (error) {
        return []
    }
}

export const createCity = async (city) => {

    try {
        const response = await citiesQueries.post('/', city);
        return response.data;
    }catch (error) {
        return []
    }
}

export const updateCity = async (id, city) => {

    try {
        const response = await citiesQueries.put(`/${id}`, city);
        return response.data;
    }catch (error) {
        return []
    }
}

export const deleteCity = async (id) => {

    try {
        const response = await citiesQueries.delete(`/${id}`);
        return response.data;
    }catch (error) {
        return []
    }
}
