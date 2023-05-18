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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import add from "./add.css";
// import queryString from 'query-string';
import axios from "axios";
import { Paper } from "@material-ui/core";
import { green } from "@mui/material/colors";
import { useLocation } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Recipe 
      </Typography>
      <Typography variant="h6" component="div">
       
      
      </Typography>
    </CardContent>
    <CardActions>
      
    </CardActions>
  </React.Fragment>
);




export default function Frop() 
  {

    const rec=localStorage.getItem("QuizRespJson");
    const recJson=JSON.parse(rec);
    
    const [expanded, setExpanded] = React.useState(false);
    
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  
    console.log("Response json from quiz page recieved:");
    console.log({recJson});

    //setRecomend(localStorage.getItem("QuizRespJson"))
    // const dish1= localStorage.getItem("dish1")
    // console.log(dish1)
   
    // const dish2= localStorage.getItem("dish2")
    // const dish3= localStorage.getItem("dish3")
    // const data= JSON.parse(dish1);
    // const data2= JSON.parse(dish2);
    // const data3= JSON.parse(dish3);
    // const [favorites, setFavorites] = useState('');
    const UserId=sessionStorage.getItem("User_id");
    

const handleFavorite = (food_id, food_name, food_link, food_method) => {
  
  // console.log("clicked on fav",UserId,Food_id, Food_name, food_link, food_method);
  const favResponse={
    UserId,
  food_id,
  food_name,
  food_link,
  food_method

  };
  
  console.log(JSON.stringify(favResponse));

axios.post(process.env.REACT_APP_BackendAPI+'/fav/createFavorite',favResponse)
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error.response.data);
});
}



      

    return (
      <>
      <NavbarTemp/>
      <body >
      <Paper
        elevation={3}
        style={{
          height: 900,
          backgroundImage: `url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255,255,255,0.5",
          overflowY: 'scroll',
          opacity: 0.9,
          position: "relative"
        }}
      >
        <br></br>
        <div class="card-container" sx={{ backgroundColor: "#ffffff" }}>
         
        {recJson.recommendations.map((card) => 
          <Card
            variant="outlined"
            className="card"
            sx={{
              maxWidth: 345,
              boxShadow:
                "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
              border: "20px solid white",
              outline: "none",
              borderRadius: 5,
              marginBottom:"10%"
            }}
          >
            {card.food_name}
      
          
            <CardMedia
              component="img"
              height="194"
              alt="Uploaded img"
             
              image={card.image_link}
              style={{ borderRadius: '15px' , paddingTop: '10%'}}
            />
            
            <CardActions disableSpacing>
            <IconButton class="icon-button"  color="error" aria-label="add to favorites" 
         onClick={() => handleFavorite(card.food_id, card.food_name, card.image_link, card.instructions)}
        >
          <FavoriteIcon />
          
        </IconButton>

              <ExpandMore expand={expanded}onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                color="primary"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph color={"#000000"}>
                  Method:
                </Typography>
                <Typography paragraph>
                  {card.instructions}
                </Typography>
                
              </CardContent>
            </Collapse>
          </Card>
        )}
          
        </div>
      </Paper>
      </body>
    </>
    
  );
}

     




