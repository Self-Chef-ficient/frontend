import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from "react";
import { Link } from 'react-router-dom'
// import { useState, useEffect } from "react";
import axios from 'axios';
// import { makeStyles } from '@mui/styles';
// import add from './add.css';
import {useNavigate} from 'react-router-dom'
import add from "./add.css";

const theme = createTheme({ palette: {
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#000000',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    light: '#0066ff',
    main: '#748DA6',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '',
  },
}});
// const useStyles = makeStyles({
//   gridContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
// });

export default function SignInSide() {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const classes = useStyles();
  const Login = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const reqBody = {
      email: email,
      password: password,
    };
    axios.post(process.env.REACT_APP_BackendAPI+'/auth/login', reqBody)
    .then((response) => {
      // Handle successful login
      console.log(response.data);
      
      sessionStorage.setItem("token",response.data.token,);
      sessionStorage.setItem("first_name",response.data.first_name);
      sessionStorage.setItem("User_id", response.data.id)
      console.log(sessionStorage.getItem("token"));
      console.log(sessionStorage.getItem("first_name"));
      console.log(sessionStorage.getItem("User_id"));


      var delayInMilliseconds = 3; //10 second

           setTimeout(function() {
             //your code to be executed after 10 second
             window.location="/HomePage"
           }, delayInMilliseconds);
      
    })
    .catch((error) => {
      // Handle authentication error
      console.log(error);
    });

  };

  function handleSubmit(event) {
      event.preventDefault();
  }
 

  return (
    <ThemeProvider theme={theme}>
      <Grid container  component="main" sx={{ height: '100vh', color: 'pallete.secondary.main'} }  >
        <CssBaseline />
        <Grid
      
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(./Signin.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box noValidate onClick={handleSubmit}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color:'secondary'
            }}
          >
            <Avatar className="logo" sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"    sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                value = {email}
                onChange = {(e) =>{setEmail(e.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {password}
                onChange = {(e) =>{setPassword(e.target.value)}}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=> Login()}
                color="secondary"
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                   
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/SignUp"}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
// onChange={(event) => setPassword(event.target.value)}