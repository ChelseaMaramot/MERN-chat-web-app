import React, { useState } from "react";
import { Button, TextField, Modal, Box,Typography } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import { alignProperty } from "@mui/material/styles/cssUtils";

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
  
const api = axios.create({
    baseURL: `http://localhost:3000/api`
});


export default function ChatModal(props){

    const [groupChatName, setGroupName] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const createGroup = () => {

    }

    const searchHandler = async (event) => {
        event.preventDefault(); 

        const input = event.target.value;

        api.get(`/${props.user}?search=${input}`).then(res=>{
            setSearchResult(res.data);
            console.log(searchResult)
        })
        

        setSearch(input);
        if (!input){
            return;
        }
        try{
            setLoading(true)
            const {data} = await axios.get()

        } catch(error) { 

        }

        

    }

    return (
        <div>
            
            <Modal
            open={props.isOpen} //props.isOpen
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
                    <TextField id="users" label="Add Users eg: John, Jane" color="secondary" variant="outlined" fullWidth onChange={searchHandler}/>
                    {/*selected users*/}
                    {/*render search users*/}
                    <Button variant="contained" color="secondary" align="right" sx={{float: "right"}} onClick={createGroup}>Create Chat</Button>
                </Box>
                
            </Box>
            </Modal>
        </div>
    )
};