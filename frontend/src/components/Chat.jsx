import Sidebar from "./Sidebar";
import SideNavbar from "./SideNavbar";
import { Box, Grid, Item, Typography } from "@mui/material";

  
export default function Chat() {
    return(
        <Box
            sx={{
                position:"fixed",
                display: 'flex',
                flexDirection: "row",
                width: '100%',
                height: '100vh',
                m:-1,
                overflow: 'hidden'
            }}
        >
            <SideNavbar></SideNavbar>
            <Sidebar></Sidebar>
        </Box>
    )
}