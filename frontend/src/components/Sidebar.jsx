import React, {useState} from 'react'
import { Box, Divider, dividerClasses, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
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


export default function Sidebar(){
    const [selectedIndex, setSelectedIndex] = useState('');
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
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

                }}
               
                >
                <Typography variant="h5" sx={{m: '40px 20px'}}>Messages</Typography>
                <List>
                    {['Jane Doe', 'Jane Doe', 'Jane Doe', 'Jane Doe'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={(event) => handleListItemClick(index)}
                                sx={{ height: 85, border: '.25px solid rgba(242, 233, 255, 0.24)', radius: 5, background: 'rgba(242, 233, 255, 0.05)'
                            }}
                                >
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </ThemeProvider>
    )
}