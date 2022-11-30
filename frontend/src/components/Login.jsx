import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Grid, Typography, TextField, Button, FormControlLabel, Link, Checkbox } from '@mui/material';

export default function Login(){
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
                <Typography mt={1}>Login</Typography>
                <Box component="form" sx={{mt:3}}>
                    <TextField label="Email" fullWidth required sx={{mb:1.5}}></TextField>
                    <TextField label="Password" type="password" fullWidth required></TextField>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> 
                    <Link href="#" variant="body2">Forgot password?</Link>
                    <Button type="submit" variant='contained' fullWidth sx={{mt: 2, mb:5}}>LOGIN</Button>
                    <Typography variant="body2"> Not registered yet?
                        <Link href="#" variant="body2">Create an Account</Link>
                    </Typography>
                </Box>
             </Grid>
        </Paper>
      </Box>
    )
};