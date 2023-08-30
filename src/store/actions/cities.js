import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction("add_cities", (cities) => {
    return {

        payload: cities,
    };   
    
    
    });
const citiesActions = { add_cities };
export default citiesActions;