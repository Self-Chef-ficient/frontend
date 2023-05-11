import NavbarTemp from "./NavbarTemp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { makeStyles } from "@material-ui/core/styles";
import add from "./add.css";
import { useState, useEffect } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { display } from "@mui/system";
import { visuallyHidden } from "@mui/utils";
import Link from "@mui/material/Link";
import CardHeader from "@mui/material/CardHeader";
import { Paper } from "@material-ui/core";

import pizza from "../images/pizza.png";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";

import { green, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Recipe
      </Typography>
      <Typography variant="h6" component="div"></Typography>
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
);
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RR() {
  const [expanded, setExpanded] = React.useState(false);
  const [recipe, setRecipe] = useState([])
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [recipe2, setRecipe2] = useState("")
  const [title2, setTitle2] = useState('')
  const [ingredients2, setIngredients2] = useState('')
  const [image, setImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)

  const handleFileUpload = event => {
    setImage(event.target.files[0]);

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageFile(reader.result);
    };
  };
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setImageFile(reader.result);
  //   };
  // };

  const getRecipe = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', image);

    axios.post('http://35.233.223.103/getRecipe', formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
      }
    })
      .then((response) => {
        // response.json()
        console.log(response.data[0]['Instructions'])
        setRecipe(response.data)
        console.log(response)
        // setTitle(response.data)
        // setIngredients(response.data)
        // setRecipe2(response.data[1]['Instructions'])
        // setTitle2(response.data[1]['Title'])
        // setIngredients2(response.data[1]['Ingredients'])
      }).catch(error => console.error(error))
  
  };

  // const getRecipe = async(event) =>{
    
  //   event.preventDefault();

  //   // if(image){
  //     let imageData = new FormData();
  //     console.log(imageData)
  //     imageData.append('file', image);


  //     let url = `http://35.199.177.94/getRecipe`
  //     const response = await axios.post(url, imageData);
  //     console.log(response)
  //   // }
  // }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <NavbarTemp />

      <Paper
        elevation={3}
        style={{
          height: 900,
          backgroundImage: `url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255,255,255,0.5",
          overflowY: 'scroll',
       
          opacity: 0.9,
          position: "relative",
        }}
      >
        <br></br>
        <div>
          <IconButton
            class="cam"
            color="success"
            aria-label="upload picture"
            component="label"
            size="large"
          >
            <input hidden accept="image/*" type="file" onChange={handleFileUpload}/>
            <AddAPhotoIcon />
          </IconButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button size="large" variant="contained" color="success" onClick={getRecipe}>
            Get Recipe
          </Button>
        </div>
        <br></br>

        <div class="rrcard1" sx={{ backgroundColor: "#ffffff" }}>
        {recipe.map((card) => 
          <Card
            variant="outlined"
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
            }}
          >
            {card.Title}
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
              // image="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329522__480.jpg"
              alt="Uploaded img"
               
              image={imageFile} 
            />
            <CardActions disableSpacing>
              <IconButton
                class="icon-button"
                color="error"
                aria-label="add to favorites"
              >
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
              <Typography paragraph color={"#000000"}>
                  Ingredients:
                </Typography>
                <Typography paragraph>
                  {card.Ingredients}
                </Typography>
                <Typography paragraph color={"#000000"}>
                  Method:
                </Typography>
                <Typography paragraph>
                  {card.Instructions}
                </Typography>
                
              </CardContent>
            </Collapse>
          </Card>
          
        )}
          {/* <Card
            variant="outlined"
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
            }}
          >
            {title2.toString()}
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
            />
            <CardMedia
              component="img"
              height="194"
              // image="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329522__480.jpg"
              alt="Uploaded img"
               
              image={imageFile} 
            />
            <CardActions disableSpacing>
              <IconButton
                class="icon-button"
                color="error"
                aria-label="add to favorites"
              >
                <FavoriteIcon />
              </IconButton>
             
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
              <Typography paragraph color={"#000000"}>
                  Ingredients:
                </Typography>
                <Typography paragraph>
                  {ingredients2.toString()}
                </Typography>
                <Typography paragraph color={"#000000"}>
                  Method:
                </Typography>
                <Typography paragraph>
                  {recipe2.toString()}
                </Typography>
                
              </CardContent>
            </Collapse>
          </Card> */}
        </div>
      </Paper>
    </>
  );
}
