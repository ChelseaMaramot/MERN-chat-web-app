import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Grid, Typography, TextField, Button, FormControlLabel, Link, Checkbox } from '@mui/material';

export default function Signup(){
    return (
        <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 'auto',
            width: 400,
            height: 500,
          },
          alignItems: 'center',
        }}
      >
        <Paper elevation={12} style={{padding: 35}}>
            <Grid align="center">
                <Avatar src="/broken-image.jpg" />
                <Typography mt={2}>Create your free account</Typography>
                <Box component="form" sx={{mt:3}}>
                    <TextField label="Username" fullWidth required sx={{mb:1.5}}></TextField>
                    <TextField label="Email" fullWidth required sx={{mb:1.5}}></TextField>
                    <TextField label="Password" type="password" fullWidth required></TextField>
                    <Button type="submit" variant='contained' fullWidth sx={{mt:3, mb:5}}>SIGNUP</Button>
                    <Typography variant="body2"> Already have an account?
                        <Link href="#" variant="body2">SIGN IN</Link>
                    </Typography>
                </Box>
             </Grid>
        </Paper>
      </Box>
    )
};