import Sidebar from "./Sidebar";
import SideNavbar from "./SideNavbar";
import { Button, Box, Grid, Item, Typography, TextField } from "@mui/material";
import ChatBar from "./ChatBar";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import MessageCard from "./Message/MessageCard"

const api = axios.create({
    baseURL: `http://localhost:3000/api`
});

  
export default function ChatDashboard(props) {
    const { user } = 'you';
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

    const inputMessageHandler = (event) => {
        setMessageInput(event.target.value);
    }

    const enterMessageHandler = (event) => {
        event.preventDefault();
        //console.log(messageInput);
        console.log("sending message with conversation ID: ", conversationID)
        if (messageInput == ''){
            return
        }
        
        api.post('/messages', {
            sender: user,
            message: messageInput,
            conversationID: conversationID
        })
        .then(res => {
            setMessageInput('');
            console.log(res.data);
        });
    }

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
            <Box sx={{flexGrow: 1, marginRight: '30px', position: 'relative'}}>
                <Grid container direction="column" >
                    <Grid item xs={2}>
                        <ChatBar></ChatBar>
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: '82vh',
                            overflowY: "scroll",
                            '&::-webkit-scrollbar': {
                                display: 'none'
                              }
                            }}
                        >
                            {messages.map((item, index) =>
                                <MessageCard
                                    key = {index}
                                    message = {item.message}
                                    isMyMessage = {item.user==user ? true : false}
                                ></MessageCard>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 2, width: '60vw'},
                                bottom: 0,
                                position: 'absolute',
                                display: 'flex',
                                flexDirection: "row",
                                zIndex:999,
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField value={messageInput} color="secondary" placeholder="Message" fullWidth onChange={inputMessageHandler}/>
                            <Button 
                            type='submit'
                            onClick={enterMessageHandler} 
                            ></Button>
                        </Box>
                     </Grid>
                </Grid>
            </Box>
        </Box>
    )
}