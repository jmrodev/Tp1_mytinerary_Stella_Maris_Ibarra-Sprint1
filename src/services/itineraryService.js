import axios from 'axios'

const API_URL = 'http://localhost:3000/api/cities';

const itinerariesQueries = axios.create( {
baseURL: API_URL
} );

export const getAllItineraries = async ( ) => {
    try {
        const response = await itinerariesQueries( )
        return response.data
    } catch (error) {
        return []
    }
}