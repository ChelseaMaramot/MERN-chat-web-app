import './MessageCard.css';
import React from 'react';


const Message = (props) =>{

    return (
        <div>
            <div className="messageContainer messageText">
                {props.newMessage}
            </div>
        </div>
    )
};

export default Message;