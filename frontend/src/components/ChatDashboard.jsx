import Sidebar from "./Sidebar";
import SideNavbar from "./SideNavbar";
import { Box, Grid, Item, Typography } from "@mui/material";
import Conversation from "./Conversation";

  
export default function ChatDashboard() {
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
            <Sidebar></Sidebar>
            <Conversation></Conversation>
        </Box>
    )
}