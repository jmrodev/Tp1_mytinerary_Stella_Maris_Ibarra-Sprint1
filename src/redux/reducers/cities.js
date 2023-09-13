import { createReducer } from "@reduxjs/toolkit";
import  getCities  from "../actions/cities.js"


const initialState ={
    name: "",
    country: "",
    image: "",
    _itineraries: []
}

const citiesReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(getCities.fulfilled, (state, action) => {
            console.log(state,action);
           const  newState = [...state,action.payload]
              return newState
        })

)

export default citiesReducer;

