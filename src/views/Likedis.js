import NavbarTemp from "./NavbarTemp"
import Button from '@mui/material/Button';
import { useState } from "react";
import TagsInput from "./TagsInput";
import * as React from 'react';
import Box from '@mui/material/Box';
import axios from "axios";
// import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// import Frop from "./Frop";
import add from "./add.css";
import { Paper } from "@material-ui/core";





 




export default function Likedis() {
    const [tags, setTags] = useState([]);
    const [notIncluded, setNotIncluded] = useState([]);

    const handleChange = (newtags) =>{
        setTags(newtags)
        
    }
    const handleChangeAvoid = (newtags) =>{
        setNotIncluded(newtags)
    
    }

    const history = useNavigate();
    function handleButtonClick() {
      
      const uniqueTags = [...new Set(tags)]; // create a new array with unique tags
      const uniqueTags2 = [...new Set(notIncluded)];
      const result = {
        liked:  uniqueTags,
        disliked:  uniqueTags2
      };
      result.user=sessionStorage.getItem("User_id");
      console.log(result)
      axios.post(process.env.REACT_APP_BackendAPI+'/food/recommendText',result)
        .then(response => {
          console.log('Data received from server:', response.data);
          console.log('Data received from server:', response.data["recommendations"][0]);
          console.log()
          localStorage.setItem("dish1", JSON.stringify(response.data["recommendations"][0]))
          localStorage.setItem("dish2", JSON.stringify(response.data["recommendations"][1]))
          localStorage.setItem("dish3", JSON.stringify(response.data["recommendations"][2]))
          history("/Frop")
          // window.location.href = '/frop?data=' + encodeURIComponent(JSON.stringify(result));
        })
        .catch(error => {
          console.error('Error sending POST request:', error);
        });
    }


  return (
    <>
    <NavbarTemp/>
   

    <Paper
        elevation={3}
        style={{
          height: 900,
          backgroundImage: `url(https://images.unsplash.com/photo-1538506392157-218c11f95129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1655&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255,255,255,0.5",
          overflowY: 'scroll',
          opacity: 0.9,
          position: "relative",
        }}
      >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  width: 600,
        height: 100,
        '& input': {
          fontWeight: 'bold',
          color: 'black',
        }, },
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
      </div>
      <br>
      </br><br></br><br></br>
      <div>
      <Button size="large" variant="contained" color="success" onClick={handleButtonClick}>Get Recommendation</Button>
      </div>  
    </Box>
    </Paper>
    </>
  );
}