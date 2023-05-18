import NavbarTemp from "./NavbarTemp"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import IconButton , { IconButtonProps }from '@mui/material/IconButton'
// import Link from '@mui/material/Link';
import CardHeader from '@mui/material/CardHeader';
// import d1 from "../images/d1.jpg"
// import d2 from "../images/d2.jpg"
import recipe from "../images/recipe.jfif"
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import add from "./add.css";
import axios from "axios";
import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';




export default function Fav() 
  {
    const handleImageError = (event) => {
      event.target.src = 'images/OIG.jpeg'; // Replace 'default_image.jpg' with the path to your default image
    };
const [foods, setFoods] = useState([]);
const UserName=sessionStorage.getItem("first_name");
const UserId=sessionStorage.getItem("User_id");
console.log(UserName, UserId)
// axios.get(process.env.REACT_APP_BackendAPI+'/fav/'+UserId)
 const fetchFavorites = (userId) => {
  axios.get(process.env.REACT_APP_BackendAPI+ '/fav/'+UserId)
    .then(response => {
      // Process the response data
      console.log(response.data);
      setFoods(response.data)
    })
    .catch(error => {
      // Handle the error
      console.error('Error fetching favorites:', error);
    });
};
fetchFavorites(UserId);

// const userRecipes = jsonData.filter((recipe) => recipe.userid === UserId);
return (
  <>
  <NavbarTemp/>
  

    <div class="fav">
      <br></br>
      <Typography variant="h3" align="center" gutterBottom>
        Favorite Foods List
      </Typography>
      <List style={{ display: 'flex', flexDirection: 'column' }}>
        {foods.map((food) => (
          <ListItem key={food.food_id} alignItems="center">
           <img src={food.food_link} alt={food.food_name}  onError={handleImageError} style={{ width:'300px', height: '300px', marginRight: '20px' , borderRadius:'20px'}} />
            <ListItemText
              primary={food.food_name}
              secondary={food.food_method}
              primaryTypographyProps={{ variant: 'h4' }}
              secondaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  
  





    
  </>
);
  }


