import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";

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
     builder.addCase(citiesActions.add_cities, (state, action) => {
                console.log("createReducer ", action.payload.cities);
                // state.cities = action.payload.cities;

                const newState = { ...state, cities: action.payload.cities};
                return newState;
            })
    }
);

export default citiesReducer;

