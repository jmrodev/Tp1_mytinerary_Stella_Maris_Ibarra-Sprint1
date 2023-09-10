import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cities';


const citiesQueries = axios.create( {
baseURL: API_URL
} );

// console.log('Haciendo una solicitud GET a /city');
// citiesQueries.get('/')
//   .then((response) => {
//     console.log('Respuesta recibida:', response.data.data[0]._id);
//   })
//   .catch((error) => {
//     console.error('Error en la solicitud:', error);
//   });




export const getAllCities = async (queryParams = "") => {
    try {
        const response = await citiesQueries(queryParams);
    //    console.log("respuesta getall",response.data.data[0].country);
        return response;
        
    }catch (error) {
        return []
    }
}

export const getCityById = async (id) => {
    try {
        const response = await citiesQueries.get(`/${id}`);
        return response;
    }catch (error) {
        return []
    }
}

export const createCity = async (city) => {

    try {
        const response = await citiesQueries.post('/', city);
        return response;
    }catch (error) {
        return []
    }
}

export const updateCity = async (id, city) => {

    try {
        const response = await citiesQueries.put(`/${id}`, city);
        return response;
    }catch (error) {
        return []
    }
}

export const deleteCity = async (id) => {

    try {
        const response = await citiesQueries.delete(`/${id}`);
        return response;
    }catch (error) {
        return []
    }
}
