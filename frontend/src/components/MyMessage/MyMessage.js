import React from "react";
import "./MyMessage.css";
import Picker from 'emoji-picker-react';


const MyMessage = (props) => {
    
    return(
        <div className="message isMyMessage">
            <img src='https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:eco,w_650/v1/yms/prod/1ff1771e-9c71-42b8-8013-097dc2cd341d' alt=''></img>
            <div>hello</div>
        </div>
    )
};

export default MyMessage;