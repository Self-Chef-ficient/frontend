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




export default function FropQ() 
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

    // const dish1= localStorage.getItem("dish1")
    // console.log(dish1)
   
    // const dish2= localStorage.getItem("dish2")
    // const dish3= localStorage.getItem("dish3")
    // const data= JSON.parse(dish1);
    // const data2= JSON.parse(dish2);
    // const data3= JSON.parse(dish3);

    return (
      <>
      <NavbarTemp/>
     <body class="fropbody"> <br></br><br></br><br></br>
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
        <Typography>Brussels Sprouts With Bacon and Chestnuts</Typography>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] ,height:"50px", widht:"50px"}} aria-label="recipe" src={recipe}>
            
          </Avatar>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image="http://graphics8.nytimes.com/images/2014/05/19/dining/Brussels-Sprouts/Brussels-Sprouts-master315.jpg"
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
          <Typography paragraph>"Heat oven to 375. Put chopped bacon in an ovenproof skillet with chopped brussels sprouts, onion and chestnuts. Toss with olive oil, and put in the oven; roast, tossing occasionally, until tender. Nice with breadcrumbs on top."
          </Typography>
          <Typography paragraph>
         
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
        <Typography>Upama and chutney -Typically Indian</Typography>
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
        image="https://img-global.cpcdn.com/001_recipes/6484202438524928/0x0/photo.jpg"
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
          <Typography paragraph>in a frying pan add ghee and cumin seeds along with curry leaves, cashew nuts, onion ,carrot, beans ,peas -saute them in another pan take a tablespoon ghee and add rawa for a min or two at medium flame mix all the ingredients together add 4 cups boiled water to the above mix and keep stirring so that no lumps are formed (till they get dry) For Chutney : in a mixer , mix the curd , ginger and green chillies and add them to the grated coconut and your chutney is ready"

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
        <Typography>Arka's Chilli Sausages</Typography>
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
        image="https://img-global.cpcdn.com/001_recipes/4564339604324352/0x0/photo.jpg"
        alt="dish"
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
          Thaw the sausages (if using frozen food). Dice the sausages evenly. Chop the capsicum and tomatoes into desirable sized pieces. Grate the onions, garlic and ginger into a coarse paste. Heat the frying pan to remove moisture. Add 2 tablespoons of oil and 2 teaspoons of salt to the pan. Add the sausages and saute till it turns light brown. Remove the sausages from the pan and set them aside. Let the oil remain in the pan. Add 1 tablespoon of oil (not required if you want to use less oil) and the onion, garlic and ginger paste to the pan. Add the red chilli powder and dried coriander powder to the pan. Cover the pan with a lid. Cook for 3-4 minutes. Stir occasionally. Add salt if necessary. Add the sausages to the pan. Cover, cook for 7-8 minutes. Stir occasionally. Add the chopped capsicum and tomatoes. Rip the green chilles down the length and add to the pan. Add the soya sauce for colour and taste. Cook for another 2 minutes and stir to evenly mix the soya sauce. Remove pan from stove and serve!
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


