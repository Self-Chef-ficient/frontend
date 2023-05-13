
// import Navbar from "./Navbar"
import NavbarTemp from "./NavbarTemp"
import Card from '@mui/material/Card';
// import { Link } from 'react-router-dom';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from "axios";
import add from "./add.css";

import { CardActionArea } from '@mui/material';


document.body.style = 'background: #F9F9F9;';

const font = "font-family: 'Delicious Handrawn', cursive";



  const handleClick = async (data) => {
    try {
      const response = await axios.post('https://example.com/api', { data }); // Replace with your API endpoint and data
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }}


export default function HomePage() {
//  const classes=useStyles();
    return (
      <>
        <NavbarTemp />
        
      <body class="hmpagebody">
        <Container   sx={{ py: 8}} maxWidth="md" style={{
         display: 'flex',
         alignItems: 'bottom right', 
          backgroundSize: "fit",
          backgroundRepeat: "no-repeat",
          position:'relative',
          width: " 100vw",
          height: "100vh",
          // add position relative
          
        }}>
          <Grid container spacing={12} justifyContent="center">
            <Grid item xs={10} sm={5}>
              <Card sx={{  maxWidth: 500, py: 4, height: 500 , padding:0, boxShadow:10, marginBottom:3, borderRadius:10, elevation: 24, 
                   transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                   transform: 'translateY(-4px)'}, border: '20px solid white',
                    outline: 'none'}} >
              <CardActionArea  href="/FoodRectrial" onClick={handleClick}>
                <CardMedia
                  sx={{ height: 400 }}
                  image="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  title="green iguana"

                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" fontFamily={font}>
                    Food Recommendation 
                  </Typography>
                  <Typography variant="body1" color="#6D9886">
                  Click to Start Recommendation!
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
              <p></p>
              <br></br>

              
            </Grid>
            <Grid item xs={10} sm={5} >
              <Card sx={{ maxWidth: 500, py: 4 , height: 500 , padding:0, boxShadow:10, borderRadboxShadowius:10, elevation:24, borderRadius:10,
               transform: 'translateY(-8px)',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                 transform: 'translateY(-4px)',
                }, border: '20px solid white',
                 outline: 'none'}}>
              <CardActionArea href="/RR">
                <CardMedia
                  sx={{ height: 400 }}
                  image="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=170667a&w=0&k=20&c=P3jIQq8gVqlXjd4kP2OrXYyzqEXSWCwwYtwrd81psDY="
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" fontFamily={font}>
                    Get me Recipe
                  </Typography>
                  <Typography variant="body1" color="#6D9886">
                  Click to Upload a picture!
                  </Typography>
                </CardContent>
                </CardActionArea>
              
              </Card>
              <p></p>
              <br></br>
              
            </Grid>
          </Grid>
        </Container>
        </body>
      </>
    );
  }
