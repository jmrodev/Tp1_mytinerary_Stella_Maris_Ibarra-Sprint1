import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../utlis/axios.js"

const getCities = createAsyncThunk('get cities', async () => {

try {

    const response = await API.get('/api/cities')
    
    return response.data.data
} catch (error) {

    console.log("error ",error);
    
}
})

export default getCities 