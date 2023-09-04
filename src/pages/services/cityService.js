import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cities';

const citiesQueries = axios.create({
    baseURL: API_URL
});

export const getAllCities = async (queryParams = "") => {
    try {
        const response = await citiesQueries(queryParams);

        return response;

    } catch (error) {

        // Aquí puedes manejar los errores específicos y devolver mensajes de error personalizados
        if (error.response && error.response.data && error.response.data.message) {
            // Si el servidor devuelve un mensaje de error personalizado
            return { error: error.response.data.message };
        } else {
            // Si no hay un mensaje de error personalizado, puedes devolver un mensaje genérico
            return { error: "Ha ocurrido un error en el servidor" };
        }
    }
}


export const getCityById = async (id) => {
    try {
        const response = await citiesQueries.get(`/${id}`);
        return response;
    } catch (error) {
        return []
    }
}

export const createCity = async (city) => {

    try {
        const response = await citiesQueries.post('/', city);
        return response;
    } catch (error) {
        return []
    }
}

export const updateCity = async (id, city) => {

    try {
        const response = await citiesQueries.put(`/${id}`, city);
        return response;
    } catch (error) {
        return []
    }
}

export const deleteCity = async (id) => {

    try {
        const response = await citiesQueries.delete(`/${id}`);
        return response;
    } catch (error) {
        return []
    }
}
