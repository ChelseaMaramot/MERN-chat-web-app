import React from "react";
import "./MyMessage.css";
import Picker from 'emoji-picker-react';


const MyMessage = (props) => {
    
    return(
        <form>
            <input 
                type="text"
                placeholder="Message"
            ></input>
            
        </form>
    )
};

export default MyMessage;