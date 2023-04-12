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
import d1 from "../images/d1.jpg"
import d2 from "../images/d2.jpg"
import recipe from "../images/recipe.jfif"


import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';


import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RestaurantIcon from '@mui/icons-material/Restaurant';


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
        <Typography>Pasta Bolognese</Typography>
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
        image="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329522__480.jpg"
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton class="icon-button"  color="error" aria-label="add to favorites">
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
          <Typography paragraph>
            Step 0->Preheat oven to 350 degrees Fahrenheit.
          </Typography>
          <Typography paragraph>
          Step 1->Spray pan with non stick cooking spray. Step 2->Heat milk, water and butter to boiling; stir in contents of both pouches of potatoes; let stand one minute. Step 3->Stir in corn. Step 4->Spoon half the potato mixture in pan. Step 5->Sprinkle half each of cheese and onions; top with remaining potatoes. Step 6->Sprinkle with remaining cheese and onions. Step 7->Bake 10 to 15 minutes until cheese is melted. Step 8->Enjoy ! 
          </Typography>
          
          {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography> */}
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
        </Card>
        </Grid>
        {/* </div>

        <div class="rrcard1"> */}
        <Grid >
        <Card variant="outlined" sx={{ maxWidth: 250 , boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    transform: 'translateY(-8px)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },border: '20px solid white',
    outline: 'none',borderRadius:5}} >{card}
        <Typography>Kombu Tea Grilled Chicken Thigh</Typography>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}}  aria-label="recipe" src={recipe}>
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
        image={d2}
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
          {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography> */}
          <Typography paragraph>
          Kombu Tea Grilled Chicken Thigh,"Step 0->Pierce the skin of the chicken with a fork or knife. Step 1->Sprinkle with kombu tea evenly on both sides of the chicken, about 1 teaspoon per chicken thigh. Step 2->Brown the skin side of the chicken first over high heat until golden brown. Step 3->Sprinkle some pepper on the meat just before flipping over. Step 4->Then brown the other side until golden brown. 
          </Typography>
          {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography> */}
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
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
        <Typography>Crunchy Onion Potato Bake</Typography>
        <CardHeader
        avatar={
          <Avatar color="error" sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}}  aria-label="recipe" src={recipe}>
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
        image={d1}
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




