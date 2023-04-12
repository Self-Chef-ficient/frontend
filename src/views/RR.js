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
import { useState, useEffect } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { styled } from '@mui/material/styles';
import IconButton , { IconButtonProps }from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { display } from '@mui/system';
import { visuallyHidden } from '@mui/utils';
import Link from '@mui/material/Link';
import CardHeader from '@mui/material/CardHeader';
import { Paper } from '@material-ui/core';

import pizza from "../images/pizza.png"

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';


import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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




export default function RR() 
  {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
      <>
      <NavbarTemp/>

      
      <Paper elevation={3} style={{ height: 900 , backgroundImage:`url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60)`, backgroundSize: 'cover',
        backgroundPosition: 'left',backgroundRepeat:'no-repeat' ,backgroundColor: 'rgba(255,255,255,0.5', opacity:0.9 ,position: 'relative'}}>
        <br></br>
        <div>
        <IconButton  class="cam" color="success" aria-label="upload picture" component="label" size="large">
        <input hidden accept="image/*" type="file" />
        <AddAPhotoIcon />
        </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button   size="large" variant="contained" color="success" onClick>Get Recipe</Button>
        </div>
<br>
</br>

        <div class="rrcard1" sx={{ backgroundColor: '#ffffff'}}>
        <Card variant="outlined" sx={{ maxWidth: 345 , boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    transform: 'translateY(-8px)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },border: '20px solid white',
    outline: 'none',borderRadius:5}} >{card}
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
          
        // }
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329522__480.jpg"
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton class="icon-button" color="error" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={"#000000"}>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
        </Card>
        
        </div> 
        </Paper>
        
     

     
      


       

        
     
      </>
    );
  }