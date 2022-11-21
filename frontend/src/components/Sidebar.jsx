import React, {useState} from 'react'
import { Button, Box, TextField, Divider, dividerClasses, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const theme = createTheme({
    components:{
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        background: 'linear-gradient(90.02deg, rgba(153, 138, 180, 0.61) 12.68%, rgba(153, 138, 180, 0.2) 77.17%, rgba(153, 138, 180, 0.152695) 92.27%, rgba(153, 138, 180, 0.19) 97.41%)',
                        border: '1px solid rgba(242, 233, 255, 0.24)',
                        boxShadow: '0px 4px 4px 0px #00000040',

                    }
                }
            }
        }
    }
});


export default function Sidebar(props){
    const [selectedRoomID, setSelectedRoomID] = useState('');

    const handleListItemClick = (roomID) => {
        setSelectedRoomID(roomID);
        props.onSelectRoomID(roomID)
    };
    
    return (
        <ThemeProvider theme={theme}>
            <Box 
                sx={{
                    m: 0,
                    width: '25%',
                    minWidth: '100px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                    },
                    background: 'rgba(242, 233, 255, 0.24)',
                    position: 'relative'

                }}
               
                >
                <Typography variant="h6" sx={{m: '20px 20px 5px 20px'}}>Messages</Typography>
                <Box
                    sx={{'& > :not(style)': { m: '1px 15px', width: '88%'},}}
                >
                    <TextField color="secondary" size="small" placeholder=" 🔍 Search" fullWidth/>
                </Box>

                <List>
                    {props.roomData.map((room, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                selected={selectedRoomID == room.conversationID}
                                onClick={(event) => handleListItemClick(room.conversationID)}
                                sx={{ height: 85, border: '.25px solid rgba(242, 233, 255, 0.24)', radius: 5, background: 'rgba(242, 233, 255, 0.05)'
                            }}
                                >
                                <ListItemText primary={room.roomName} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{
                    alignItems: 'center',
                    display:"flex",
                    justifyContent:"center"
                }}
                >                 
                    <Button variant="contained" color='secondary' sx={{
                        bottom:'16px',
                        position: 'absolute',
                        width: '75%',
                        zIndex: 9999
                    }}
                    onClick={props.onClickNewChat}
                    >new chat</Button>
                </Box>  
            </Box>
        </ThemeProvider>
    )
}