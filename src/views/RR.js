import NavbarTemp from "./NavbarTemp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import add from "./add.css";
// import { useState,useEffect  } from "react";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { Paper } from "@material-ui/core";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { CircularProgress } from '@mui/material';

import axios from "axios";

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


export default function RR() {
  const [expanded, setExpanded] = React.useState(false);
  const [recipe, setRecipe] = useState([])
  const [image, setImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false);


  const handleFileUpload = event => {
    setImage(event.target.files[0]);

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageFile(reader.result);
    };
  };
  

  const getRecipe = event => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', image);

    axios.post(process.env.REACT_APP_RrAPI+'/getRecipe', formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
      }
    })
      .then((response) => {
        // response.json()
        setIsLoading(false);
        console.log(response.data[0]['Instructions'])
        setRecipe(response.data)
        console.log(response)
      }).catch(error => {
        setIsLoading(false);
        console.error(error)})
  
  };



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
          backgroundColor: "rgba(255,255,255,0.5)",
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
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </div>
        ) : (
          recipe.map((card) => 
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
                marginBottom:"10%"
              }}
            >
              {card.Title}
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
                alt="Uploaded img"
                image={imageFile} 
              />
              <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={handleExpandClick}
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
          )
        )}
        </div>
      </Paper>
    </>
  );



  
}
