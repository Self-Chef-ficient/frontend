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
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




export default function Frop() 
  {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [expanded1, setExpanded1] = React.useState(false);
  
    const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
    };

    const [expanded2, setExpanded2] = React.useState(false);
  
    const handleExpandClick2 = () => {
      setExpanded2(!expanded2);
    };

    const dish1= localStorage.getItem("dish1")
    console.log(dish1)
   
    const dish2= localStorage.getItem("dish2")
    const dish3= localStorage.getItem("dish3")
    const data= JSON.parse(dish1);
    const data2= JSON.parse(dish2);
    const data3= JSON.parse(dish3);

    return (
      <>
      <NavbarTemp/>
     <body class="fropbody"> <br></br><br></br>
      <div >
        <Grid container direction="row" sx={{ spacing:6,gap:20 , paddingLeft:20 }} >
        
        <Grid >
        <Card variant="outlined" sx={{ maxWidth: 250 , boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    transform: 'translateY(-8px)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },border: '20px solid white',
    outline: 'none',borderRadius:5}} >{card}
        <Typography>{data.food_name}</Typography>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}} aria-label="recipe" src={recipe}>
            
          </Avatar>
        }
        // <imgage>{recipe}</imgage>
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
          
        // }
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image_link}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton class="icon-button"  color="error" aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
       
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
          <Typography paragraph>{data.instructions}
          </Typography>
          <Typography paragraph>
         
          </Typography>
        
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
        </Card>
        </Grid>
    
        <Grid >
        <Card variant="outlined" sx={{ maxWidth: 250 , boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    transform: 'translateY(-8px)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },border: '20px solid white',
    outline: 'none',borderRadius:5}} >{card}
        <Typography>{data2.food_name}</Typography>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}}  aria-label="recipe" src={recipe}>
            R
          </Avatar>
        }
    
      />
      <CardMedia
        component="img"
        height="194"
        image={data2.image_link}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton class="icon-button" color="error" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
        <ExpandMore
        color="secondary"

          expand={expanded1}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{data2.instructions}

          </Typography>
        </CardContent>
      </Collapse>
        </Card>
        </Grid>
      
        <Grid>
        <Card variant="outlined" sx={{ maxWidth: 250 , boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    transform: 'translateY(-8px)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },border: '20px solid white',
    outline: 'none',borderRadius:5}} >{card}
        <Typography>{data3.food_name}</Typography>
        <CardHeader
        avatar={
          <Avatar color="error" sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}}  aria-label="recipe" src={recipe}>
            R
          </Avatar>
        }
       
      />
      <CardMedia
        component="img"
        height="194"
        image={data3.image_link}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton class="icon-button" color="error" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        <ExpandMore
        color="secondary"
          expand={expanded2}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          {data3.instructions}
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

        </body>
        
      </>
    );
  }




