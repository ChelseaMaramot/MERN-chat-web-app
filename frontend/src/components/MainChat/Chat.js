import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ChatRoomBox from '../UI/SideBar/ChatRoomBox';
import "./Chat.css";
import NavBar from './../UI/NavBar/NavBar';
import MessageCard from '../UI/Message/MessageCard';

const api = axios.create({
    baseURL: `http://localhost:3000/api`
});

const Chat =(props) => {

    const [messages, setMessages] = useState([]);
    const [conversationID, setConversationID] = useState('');

    useEffect(() => {
        console.log('here');
        api.get(`/messages/5`).then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(e.toJSON());
        })
    });
    
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
                <div className='chatName'>
                    <NavBar></NavBar>
                </div>
                <div className='conversation'>
                    <MessageCard
                        message='Lorem ipsum dolor sit amet. Est veritatis minima non dolores amet sit voluptatem reprehenderit sed possimus quia ut impedit voluptas non galisum galisum. '
                        isMyMessage = {true}
                    ></MessageCard>
                    <MessageCard
                        message='Lorem ipsum dolor sit a amet sit voluptatem repreh '
                        isMyMessage = {true}
                    ></MessageCard>
                    <MessageCard
                        message='Eos consequatur necessitatibus vel molestiae enim non dolor dolore est itaque aperiam ea nihil rerum. Sed iusto velit et magni delectus quo inventore temporibus eum deleniti nihil et molestias magnam? Id facere inventore est consequatur praesentium aut quia omnis sed'
                        isMyMessage = {false}
                    ></MessageCard>
                    <MessageCard
                        message='Lorem ipsum dolor sit a amet sit voluptatem repreh '
                        isMyMessage = {true}
                    ></MessageCard>
                    <MessageCard
                        message='Lorem ipsum dolor sit amet. Est veritatis minima non dolores amet sit voluptatem reprehenderit sed possimus quia ut impedit voluptas non galisum galisum. '
                        isMyMessage = {false}
                    ></MessageCard>
                    <MessageCard
                        message='yes. '
                        isMyMessage = {true}
                    ></MessageCard>
                </div>

                <div className='chatBottom'>
                    <form class='chatForm'>
                        <input className= "chatInputArea"
                            type= 'text'
                            placeholder='Text your message...'
                        ></input>
                        <button type='submit'></button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}



export default Chat;
