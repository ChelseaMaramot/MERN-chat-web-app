import './MessageCard.css';
import React from 'react';


const Message = (props) =>{

    return (
        <div className= {props.isMyMessage ? 'message isMyMessage' : 'message'}> 
            <div className="messageText">
                {props.message}
            </div>
        </div>
    )
};

export default Message;