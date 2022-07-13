import React from 'react';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import { styled } from '@mui/material/styles';
import {Avatar, Button, TextField, Typography, Link, FormControlLabel, Checkbox} from '@mui/material';
//import LockIcon from '@mui/icons-material/Lock';
const Login = () => {
    const paperStyle = {
        padding: "20px",
        height: "70vh",
        width: "280",
        margin: "20px auto"
 }
 const avatarStyle={
    backgroundColor: "green"
 }
 const textfield ={
    margin:'10px'
 }
 const btnstyle = {
    margin:'8px 0'
 }
 return(
    <Grid>
        <Paper elavation= {10} style={paperStyle}>
            <Grid align = "center">
             <Avatar style = {avatarStyle}> </Avatar>
                <h4>Sign In</h4>
                </Grid>
                <TextField
                label = 'UserName'
                style={textfield}
                placeholder='Enter Username'
                fullWidth
                required>
                </TextField>
                <TextField
                label= 'Password'
                style={textfield}
                placeholder='Enter Password'
                type= 'password'
                fullWidth
                required>
                </TextField>
                <FormControlLabel
                control = {
                    <Checkbox
                    name= 'Checked'
                    color='primary'
                    />}
                    label = 'Remember me'
                    />
                    <Button
                    type = "submit"
                    color= "primary"
                    variant = "contained"
                    style= {btnstyle}
                    fullWidth
                    >
                    Sign In
                     </Button>
                     <Typography
                     style = {textfield}
                     >
                        <Link href = "#">
                            Forgot Password?
                        </Link>
                     </Typography>
                     <Typography
                     style = {textfield}
                     >
                        <Link href = "#">
                            Don't have an account? Sign up!
                        </Link>
                     </Typography>
                     </Paper>
                     </Grid>
                     // <Typography>
                     // <p>Hello</p>
                     // </Typography>
 )
                }
export default Login;