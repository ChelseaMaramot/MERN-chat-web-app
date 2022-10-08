import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ChatRoomBox from '../UI/SideBar/ChatRoomBox';
import "./Chat.css";
import NavBar from './../UI/NavBar/NavBar';
import MessageCard from '../UI/Message/MessageCard';
import DisplayMessages from '../DisplayData/DisplayMessages';
import DisplayRooms from '../DisplayData/DisplayRooms';

const api = axios.create({
    baseURL: `http://localhost:3000/api`
});

const Chat =(props) => {

    const [messages, setMessages] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [conversationID, setConversationID] = useState('');
    const [messageInput, setMessageInput] = useState('');

    // METHOD: GET messages
    // will change this dependency 
    useEffect(() => {
        api.get(`/messages/5`).then(res => {
            setMessages(res.data);
            console.log(messages);
        }).catch(e => {
            console.log(e.toJSON());
        })
    }, [messageInput]);


    // METHOD: GET all rooms
    // will change this dependency 

    useEffect(() => {
        api.get(`/rooms`).then(res => {
            setRooms(res.data);
            console.log(rooms);
        }).catch(e => {
            console.log(e.toJSON());
        })
    }, []);



    const inputMessageHandler = (event) => {
        setMessageInput(event.target.value);
        console.log(messageInput);
    }

    const enterMessageHandler = (event) => {
        event.preventDefault();

        console.log(messageInput);

        if (messageInput == ''){
            return
        }

        api.post('/messages', {
            sender: "Chel",
            message: messageInput,
            conversationID: "5"
        })
        .then(res => {
            setMessageInput('');
            console.log(res.data);
        });
        
    }

    // use context on this one
    // chat -> DisplayRoom -> ChatRoomBox
    const selectRoom = (id) => {
        console.log(`select this chat`, id);
    }

  

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
                    <DisplayRooms
                        data={rooms}
                        onSelectRoom = {selectRoom}
                    ></DisplayRooms>
                </div>
            </div>
            <div className="openConversation">
                <div className='chatName'>
                    <NavBar></NavBar>
                </div>
                <div className='conversation'>
                    <DisplayMessages
                        data = {messages}
                        sender = 'chelsea'
                    ></DisplayMessages>
                </div>

                <div className='chatBottom'>
                    <form className='chatForm'>
                        <input className= "chatInputArea" onChange={inputMessageHandler}
                            type= 'text'
                            placeholder='Text your message...'
                        ></input>
                        <button type='submit' onClick={enterMessageHandler}></button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}



export default Chat;
