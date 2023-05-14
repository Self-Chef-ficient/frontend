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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));






export default function FropQ() 
  {
    
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


const UserName=sessionStorage.getItem("first_name");

return (
  <>
  <NavbarTemp/>
  <body class="fropbody"> <br></br><br></br><br></br>
  <div >
    <h1 class="ProfileName">Hello {UserName}</h1>
    <Grid container direction="row" sx={{ spacing:6,gap:20 , paddingLeft:20 }} >
    
    <Grid >
    <Card variant="outlined" sx={{ maxWidth: 250 , boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
            transform: 'translateY(-8px)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
            transform: 'translateY(-4px)',
            },border: '20px solid white',
            outline: 'none',borderRadius:5}} >{card}
    <Typography>Brussels Sprouts With Bacon and Chestnuts</Typography>
    <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}} aria-label="recipe" src={recipe}></Avatar>
    }
  />
  <CardMedia
    component="img"
    height="194"
    image="http://graphics8.nytimes.com/images/2014/05/19/dining/Brussels-Sprouts/Brussels-Sprouts-master315.jpg"
    alt="Paella dish"
  />
  <CardActions disableSpacing>
    <ExpandMore
    color="secondary"
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>"Heat oven to 375. Put chopped bacon in an ovenproof skillet with chopped brussels sprouts, onion and chestnuts. Toss with olive oil, and put in the oven; roast, tossing occasionally, until tender. Nice with breadcrumbs on top."
        </Typography>
    </CardContent>
  </Collapse>
  </Card>
  </Grid>

    
  
    
    </Grid>
    </div> 

    <br></br>
    <br>
    </br>
    <br>
    </br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br>
    <br></br>
    <br>
    </br>
    <br>
    </br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    </body>
    
  </>
);
  }


