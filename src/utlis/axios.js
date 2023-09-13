import axios from "axios"

const API_URL = 'http://192.168.0.6:3000';


const API = axios.create({
    baseURL: API_URL
});

export default API;