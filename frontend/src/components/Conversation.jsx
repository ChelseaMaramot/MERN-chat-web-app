import { Box } from "@mui/material";
import React from "react";
import ChatBar from "./ChatBar";


export default function Conversation(){
    return (
        <Box sx={{flexGrow: 1, marginRight: '30px'}}>
            <ChatBar></ChatBar>
        </Box>
    )
}