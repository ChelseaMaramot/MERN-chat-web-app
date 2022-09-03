import React from "react";
import "./SendMessage.css";
import Picker from 'emoji-picker-react';


const SendMessage = (props) => {
    return(
        <form>
            <input 
                type="text"
                placeholder="Message"
            ></input>
            
        </form>
    )
};

export default SendMessage;