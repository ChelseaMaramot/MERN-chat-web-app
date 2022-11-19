import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Icon from '@mui/material/Icon';



export default function SideNavbar(){
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    m: 0,
                    maxwidth: '2.5%',
                    minWidth: '40px',
                    height: '100vh',
                    background: 'linear-gradient(90deg, rgba(53, 34, 172, 0) 0%, #5A4DEE 0.01%, rgba(67, 60, 149, 0.81769) 99.98%, rgba(33, 26, 112, 0.75) 99.99%, rgba(53, 34, 172, 0) 100%)',
                }}
                >
                <List>
                    {[<MessageIcon />, <ImportContactsIcon />, <DarkModeIcon />, <AccountCircleIcon />].map((icon, index) => (
                        <ListItem>
                            <ListItemButton >
                                {icon}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </React.Fragment>
    )
};