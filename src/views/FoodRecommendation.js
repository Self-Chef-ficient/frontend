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
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import add from "./add.css"

import React, { useState, useEffect } from 'react';

const FoodRecommendations = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  

  useEffect (  () => {
    const fetchData = async ()=>{
    const response = await axios.get('https://dummyjson.com/products/1');
    console.log(response.data.images)
    setImages(response.data.images);
    }
    fetchData()
  }, [])

  // setImages(img.images[0])
  const handleButtonClick = (increment) => {
    const newIndex = currentImageIndex + increment;
    console.log(newIndex)
    if (newIndex < 0 || newIndex >= images.length) {
      return;
    }

    setCurrentImageIndex(newIndex);
  };

  return (
    <>
   
 
   
      <NavbarTemp/>
   
      <div  class="hmpagebodydiv">
      
      
      <br></br>
      <br></br>
      <img class="imggal" src={images[currentImageIndex]} alt="gallery" />
      {/* <img src={"https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122__480.jpg"} alt="gallery" /> */}

      {/* </div> */}
     
      {/* <div class="hmpagebodyd" style={{ display: "flex", gap: "15px" , justifyContent: 'center' }}> */}
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br></br>
      <Button   size="large" variant="contained" color="success" sx={{ width: 200, padding: 1, margin: 2, borderRadius:50, boxShadow:50}} onClick={() => handleButtonClick(1)}>Must Have</Button>
          
      <Button size="large" variant="contained" color="error"sx={{ width: 200, padding: 1, margin: 2, borderRadius:50 , boxShadow:50, border:10, borderColor:'white'}} onClick={() => handleButtonClick(-1)}>No</Button>
      </div>
      </div>
      
      
    
     
 
    </>
  );
};


export default FoodRecommendations;
