import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";

//estado inicial con series de acciones
const initialState ={
    cities:[
        {
            name:"",
            country:"",
            img:"",
            description:"",

        }
    ]
}
//creo el reducer con el builder
//el builder es un objeto que tiene metodos para agregar casos
const citiesReducer = createReducer(initialState, (builder) => {
   return builder
   .addCase(citiesActions.add_cities, (state, action) => {
     const  newState = {...state,cities:action.payload.cities};
        return newState;
    });
});
//aca puedo agregar mas reducers para que se ejecuten en el mismo store 
   export default citiesReducer;