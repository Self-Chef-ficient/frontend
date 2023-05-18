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




// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Recipe 
//       </Typography>
//       <Typography variant="h6" component="div">
       
      
//       </Typography>
//     </CardContent>
//     <CardActions>
      
//     </CardActions>
//   </React.Fragment>
// );

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));






export default function FropQ() 
  {
    
    // const [expanded, setExpanded] = React.useState(false);
  
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

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
  <body class="fropbodyq"> <br></br><br></br><br></br>
  <div>
    <h1 class="heading profile">Favorite Foods List</h1>
    <ul>
      {foods.map((food) => (
        <li key={food.food_id}>
          <h2 class="food-name">{food.food_name}</h2>
          <img class="food-image" src={food.food_link} alt={food.food_name} />
          <p class="food-item">{food.food_method}</p>
        </li>
      ))}
    </ul>
  </div>
  




    </body>
    
  </>
);
  }


