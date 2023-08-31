import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction(
    'add_cities',
    (array) => {
        console.log("createAction ", array);
        return {
            payload:
            {
                cities: array
            }
        }
    });


const citiesActions = { add_cities };

export default citiesActions;