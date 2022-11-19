import Sidebar from "./Sidebar";
import SideNavbar from "./SideNavbar";
import { Box, Grid, Item, Typography } from "@mui/material";
import ChatBar from "./ChatBar";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import MessageCard from "./Message/MessageCard"

const api = axios.create({
    baseURL: `http://localhost:3000/api`
});

  
export default function ChatDashboard(props) {
    const { user } = 'chelsea';
    const [messages, setMessages] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [conversationID, setConversationID] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const selectRoom = (id) => {
        setConversationID(id);
        console.log(`selected chat conversationID:`, conversationID);
    }

    // METHOD: GET all rooms
    // will change this dependency 
    useEffect(() => {
        api.get(`/rooms`).then(res => {
            setRooms(res.data);

        }).catch(e => {
            console.log(e.toJSON());
        })
    }, [rooms]);

    // METHOD: GET messages
    // will change this dependency, messageInput
    useEffect(() => {
        console.log(`getting messages w/ conversationID:`, conversationID)
        api.get(`/messages/${conversationID}`).then(res => {
            setMessages(res.data);
            //console.log(`Get Messages:`, messages);
        }).catch(e => {
            console.log(e.toJSON());
        })
    }, [conversationID, messageInput]);
    

    return(
        <Box
            sx={{
                position:"fixed",
                display: 'flex',
                flexDirection: "row",
                width: '100%',
                height: '100vh',
                m:-1,
                overflow: 'hidden',
                background: "rgba(251, 248, 255, .8)",

            }}
        >
            <SideNavbar></SideNavbar>
            <Sidebar
                onSelectRoomID = {selectRoom}
                roomData = {rooms}
            ></Sidebar>
            <Box sx={{flexGrow: 1, marginRight: '30px'}}>
                <ChatBar></ChatBar>

                {messages.map((item, index) =>
                <MessageCard
                    key = {index}
                    message = {item.message}
                    isMyMessage = {item.user==user ? true : false}
                ></MessageCard>
            )}


            </Box>
        </Box>
    )
}