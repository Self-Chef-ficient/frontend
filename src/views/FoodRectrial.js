import NavbarTemp from "./NavbarTemp"
import Button from '@mui/material/Button';
import axios from "axios";
import add from "./add.css";
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';




const FoodRectrial = () => {
const [images, setImages] = useState([]);
const [likes, setLikes] = useState({});
const [currentIndex, setCurrentIndex] = useState(0);
const [voteCount, setVoteCount] = useState(0);
const history = useNavigate();

useEffect(() => {
    fetch(process.env.REACT_APP_BackendAPI+'/quiz')
      .then(response => response.json())
      .then(data => setImages(data.ingr));
      
  }, []);

const handleLike = (imageName, like) => {
    console.log(`Image name: ${imageName}, Like value: ${like}`);
    setLikes({ ...likes, [imageName]: like });
   
    console.log(voteCount,"votes");

    if ( currentIndex=== 4) {
      const ingr = Object.keys(likes).map(name => ({
        name: name,
        like: likes[name] ? 'like' : 'dislike'
      }));
     console.log({ingr});
     console.log("testing");
     axios.post(process.env.REACT_APP_BackendAPI+'/food/recommend3',{ingr})
        .then(response => {
          console.log('Data received from server:', response.data);
          console.log('Data received from server:', response.data["recommendations"][0]);
          localStorage.setItem("dish1", JSON.stringify(response.data["recommendations"][0]))
          localStorage.setItem("dish2", JSON.stringify(response.data["recommendations"][1]))
          localStorage.setItem("dish3", JSON.stringify(response.data["recommendations"][2]))
          history("/Frop")
        })
    } else {
        setVoteCount(voteCount + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };
 

  return (
    <>
      <NavbarTemp/>
      
      <div  class="hmpagebodydiv"> 
      <br></br>
      

{images.length >0 && images[currentIndex]?.link&& (
<div key={images[currentIndex].name}>
    <img class="gallery" src={images[currentIndex].link} alt={images[currentIndex].name} />
    <div class="FoodImageNameforQuiz">
     <h3>{images[currentIndex].name}</h3>
   
    </div>
    <Button onClick={() => handleLike(images[currentIndex].name, true)}
    variant="contained"
    color="success"
    size="large"
    sx={{
    width: 200,
    padding: 1,
    margin: 2,
    borderRadius: 50,
    boxShadow: 50
    }}
    >
    Like</Button>
    <Button onClick={() => handleLike(images[currentIndex].name, false)} variant="contained"
    color="error"
    size="large"
    sx={{ width: 200,
    padding: 1,
    margin: 2,
    borderRadius: 50,
    boxShadow: 50
    }}>Dislike</Button>
</div>
)}
<Button size="large" variant="contained"color="success" sx={{ padding: 1, margin: 2, boxShadow:50}}  href="/Likedis">Skip and Enter Ingredients</Button>
</div>
<div>  
</div>
</>
)}

export default FoodRectrial;