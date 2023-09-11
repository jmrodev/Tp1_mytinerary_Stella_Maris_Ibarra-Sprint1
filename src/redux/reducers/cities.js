import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/cities.js"
const  getCities  = citiesAction;


const initialState = {
    cities: []
}

const citiesReducer = createReducer(initialState,(builder)=> {
    builder
    
    .addCase(getCities.fulfilled, (state, action) => {
        
        return {
            ...state,
            cities: action.payload

        }
    })}
)

export default citiesReducer;

