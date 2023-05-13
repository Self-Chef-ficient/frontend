import NavbarTemp from "./NavbarTemp"
import Button from '@mui/material/Button';
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import add from "./add.css";

import React, { useState, useEffect } from 'react';



const FoodRecommendations = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  useEffect (  () => {
    const fetchData = async ()=>{
    const response = await axios.get('https://self-chef-backend.onrender.com/quizimg');
    console.log(response.data.images)
    setImages(response.data.images);
    }
    fetchData()
  }, [])
  const handleButtonResponse = (response) => {
    console.log("Button response:", response);
    // Do something with the response, such as updating state or making a network request.
    axios.post('https://example.com/api/button-response', response)
    .then((response) => {
      console.log("API response:", response);
      // Do something with the API response, such as updating state or displaying a success message.
    })
    .catch((error) => {
      console.error("API error:", error);
      // Do something with the API error, such as displaying an error message.
    });
  };
  const handleButtonClick = (increment) => {
    const newIndex = currentImageIndex + increment;
    console.log(newIndex)
    if (newIndex < 0 || newIndex >= images.length) {
      navigate('/FropQ');
      return;
    }
    const imageId = images[newIndex].id;
  const buttonResponse = { imageId, increment };
  handleButtonResponse(buttonResponse);

    setCurrentImageIndex(newIndex);

  };
    
  
 

  return (
    <>
   
 
   
      <NavbarTemp/>
   
      <div  class="hmpagebodydiv"> 
      
      
      <br></br>
      <br></br>
      
      
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br></br>
      <Button   size="large" variant="contained" color="success" sx={{ width: 200, padding: 1, margin: 2, borderRadius:50, boxShadow:50}} onClick={() => handleButtonClick(1)}>Must Have</Button>
          
      <Button size="large" variant="contained" color="error"sx={{ width: 200, padding: 1, margin: 2, borderRadius:50 , boxShadow:50}} onClick={() => handleButtonClick(1)}>No</Button>
      </div>
      <Button size="large" variant="contained"color="success" sx={{ width: 400, padding: 1, margin: 2, boxShadow:50}} a href="/Likedis">Skip and Enter Ingredients</Button>
      </div>
      
      
    
     
 
    </>
  );
};


export default FoodRecommendations;
