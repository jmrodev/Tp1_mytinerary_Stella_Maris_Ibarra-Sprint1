import { createAsyncThunk } from "@reduxjs/toolkit"
import API  from "../../utlis/axios.js"


const getCities = createAsyncThunk('getCities', async () => {

    const response = await API.get('/')
    const cities = await response.data
    console.log(cities);
    return cities
})

const actionsCities = {
    getCities
}

export default actionsCities