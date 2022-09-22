import React from 'react'
import ChatRoomBox from '../UI/SideBar/ChatRoomBox';
import "./Chat.css";
import NavBar from './../UI/NavBar/NavBar';
import MessageCard from '../UI/Message/MessageCard';

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
                </div>
            </div>
        </div>
    )
}



export default Chat;
