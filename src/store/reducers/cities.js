import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";


const initialState = {
    cities: [
        {
            name: "",
            img: "",
            description: ""
        }
    ]
};

const citiesReducer = createReducer(initialState, (builder) => {
    return builder
    .addCase(citiesActions.add_cities), (state, action) => {
        const newState = { ...state, cities: action.payload.cities };
        return newState;
    }
}
);

export default citiesReducer;

