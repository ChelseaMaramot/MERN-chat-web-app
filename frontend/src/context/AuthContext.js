import { createContext } from "react";
import { AuthReducer } from "./AuthReducer";


const initialState = {
    username: '',
    email: '',
    password: '',
    loading: false,
    errorMessage: ''
  };
  
  export const AuthContext = createContext(initialState);

  export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                username: state.username,
                email: state.email,
                password: state.password,
                errorMessage: state.errorMessage,
                dispatch
            }}
        ></AuthContext.Provider>
    )
  }