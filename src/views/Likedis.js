import NavbarTemp from "./NavbarTemp"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles';
import add from './add.css';
// import Chip from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import {OutlinedInput, Select, Chip} from "@mui/material";
import TagsInput from "./TagsInput";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ChipInput from 'material-ui-chip-input'

export default function Likedis() {
    const [tags, setTags] = useState([]);
    const [notIncluded, setNotIncluded] = useState([]);

    const handleChange = (newtags) =>{
        setTags(newtags)
    }
    const handleChangeAvoid = (newtags) =>{
        setNotIncluded(newtags)
    }


  return (
    <>
    <NavbarTemp/>
    <br></br><br></br>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  width: 600,
        height: 100, },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <p>Ingredients to Add</p>
        <div style={{ width: '100%', margin: '10px 0 10px 0' }}>
            <TagsInput
              selectedTags={handleChange}
              tags={tags}
              fullWidth
              variant="outlined"
              id="Food"
              name="food"
              placeholder="Yummm!!!"
              label="Yum Foods"
              multiline={true}
              minrows={1}
            />
          </div>
         
      
      </div>
      <br>
      </br><br></br>
      <div>
      <p>Ingredients to Avoid</p>
      <div style={{ width: '100%', margin: '10px 0 10px 0' }}>
            <TagsInput
              selectedTags={handleChangeAvoid}
              tags={notIncluded}
              fullWidth
              variant="outlined"
              id="Food"
              name="food"
              placeholder="Uhhh!!!"
              label="Not Yum Foods"
              multiline={true}
              minrows={1}
            />
          </div>
      {/* <TextField

          id="outlined-textarea"
          variant="standard"
          label=""
          placeholder="Enter here"
          multiline
          maxRows={5}
        /> */} 
      </div>
      <br>
      </br><br></br><br></br>
      <div>
      <Button size="large" variant="contained" color="success">Get Recommendation</Button>
      </div>  
    </Box>
    </>
  );
}