import React, {useReducer} from "react";


export const AuthReducer =  (initialState, action) => {
    switch (action.type){
        case "LOGIN_START":
            return {

            };
        case "LOGIN_SUCCESS":
            return {

            };
        case "LOGIN_FAILURE":
            return {

            };
        case "LOGOUT":
            return {

            };
        default:
            return;
    }
};