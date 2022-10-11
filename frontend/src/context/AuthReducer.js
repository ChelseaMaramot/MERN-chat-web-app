import React, {useReducer} from "react";

export const AuthReducer =  (state, action) => {
    const {type, payload} = action;

    switch (action.type){
        case "ADD_USER":
            return {

            };
        case "LOGIN_START":
            return {

            };
        case "LOGIN_SUCCESS":
            return {
                user: payload,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
            };
        case "LOGOUT":
            return {

            };
        default:
            return;
    }
};