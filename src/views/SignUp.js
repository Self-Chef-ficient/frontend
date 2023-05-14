import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
// import add from "./add.css";
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { withRouter } from 'react-router-dom'



const theme = createTheme();

function SignUp() {

  const [first_name, setFirst_name] = React.useState("")
  const [last_name, setLast_name] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const history=useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);

  // function handleSignInClick() {
    
  //   history.push('/');
  // }
  
  const SignUp = (event) => {
  
    const reqBody = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    }
    axios.post(process.env.REACT_APP_BackendAPI+`/auth/register`, reqBody)
    .then((respose)=>{
      window.location="/SignInSide"
      console.log(respose)
    }).catch((error
      )=>{
        console.log(error);
        let message = "An error occurred";
        if (error.response && error.response.data && error.response.data.message) {
          message = error.response.data.message;
        }
        setErrorMsg(message);
        setOpen(true); // Open the dialog box
    })
    console.log(reqBody)

  };
  function handleClose() {
    setOpen(false); // Close the dialog box
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onClick={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  value = {first_name}
                  onChange = {(e) =>{setFirst_name(e.target.value)}}
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value = {last_name}
                  onChange = {(e) =>{setLast_name(e.target.value)}}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email Address"
                  value = {email}
                  onChange = {(e) =>{setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value = {password}
                  onChange = {(e) =>{setPassword(e.target.value)}}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>SignUp()}
            >
              Sign Up
            </Button>
            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMsg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/SignInSide'}>
                 Already have an account? Sign in
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;