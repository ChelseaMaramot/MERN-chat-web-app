import React, { useState } from "react";
import { Button, TextField, Modal, Box,Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };
  


export default function ChatModal(props){

    const [groupChatName, setGroupName] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([])
 
    return (
        <div>
            
            <Modal
            open={true}
            onClose={props.closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" m={2} align='center'>
                Create Group Chat
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: .75},
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="group_name" label="Chat Name" color="secondary" variant="outlined" fullWidth />
                    <TextField id="users" label="Add Users eg: John, Jane" color="secondary" variant="outlined" fullWidth/>
                    <Button variant="contained" color="secondary" align="right" sx={{float: "right"}}>Create Chat</Button>
            
                </Box>
                
            </Box>
            </Modal>
        </div>
    )
};