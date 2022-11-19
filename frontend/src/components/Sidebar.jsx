import React, {useState} from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';


const drawerWidth = 240;
const theme = createTheme({
    palette: {
        primary:{
            main: 'rgba(53, 34, 172, 0.88)',
        }
    },
    components:{
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        background: 'linear-gradient(90.02deg, rgba(153, 138, 180, 0.61) 12.68%, rgba(153, 138, 180, 0.2) 77.17%, rgba(153, 138, 180, 0.152695) 92.27%, rgba(153, 138, 180, 0.19) 97.41%)'
                    }
                }
            }
        }
    }
});



export default function Sidebar(){
    const [selectedIndex, setSelectedIndex] = useState('');
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    
    return (
        <ThemeProvider theme={theme}>
            <Drawer 
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                      },
                }}
                variant="permanent">
                <Typography variant="h5">Messages</Typography>
                
                <List>
                    {['Jane Doe', 'Jane Doe', 'Jane Doe', 'Jane Doe'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                        <ListItemButton
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(index)}
                        >
                            <ListItemText primary={text} />
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </ThemeProvider>
    )
}