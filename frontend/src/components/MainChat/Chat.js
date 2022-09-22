import React from 'react'
import ChatRoomBox from '../UI/SideBar/ChatRoomBox';
import "./Chat.css";
import NavBar from './../UI/NavBar/NavBar';


const Chat =(props) => {
    return (
        <div className='chat'>
            <div className='leftChatBar'>
                <div className="leftBarHeader">
                    <span>Messages</span>
                </div>
                <div className='chatInputWrapper'>
                    <input className= "chatInput" placeholder='Search'></input>
                </div>
                <div className='chatBoxWrapper'>
                    <ChatRoomBox></ChatRoomBox>
                    <ChatRoomBox></ChatRoomBox>
                    <ChatRoomBox></ChatRoomBox>
                    <ChatRoomBox></ChatRoomBox>
                    <ChatRoomBox></ChatRoomBox>
                </div>
            </div>
            <div className="openConversation">
                <NavBar></NavBar>
            </div>
     
        </div>
    )
}



export default Chat;
