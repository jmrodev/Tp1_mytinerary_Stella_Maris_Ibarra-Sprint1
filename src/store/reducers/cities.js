import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";

console.log("c",citiesActions);

const initialState = {
    cities: [
        {
            _id: "",
            name: "",
            img: "",
            description: ""
        }
    ]
};

const citiesReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(citiesActions.add_cities), (state, action) => {
                const newState = { ...state, cities: action.payload};
                return newState;
            }
    }
);

export default citiesReducer;

