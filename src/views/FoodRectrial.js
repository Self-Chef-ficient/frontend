import NavbarTemp from "./NavbarTemp"
import Button from '@mui/material/Button';
import axios from "axios";
import add from "./add.css";
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { CircularProgress } from '@mui/material';






const FoodRectrial = () => {
const [images, setImages] = useState([]);
const [likes, setLikes] = useState({});
const [currentIndex, setCurrentIndex] = useState(0);
const [voteCount, setVoteCount] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [clickCount, setClickCount] = useState(0);


const history = useNavigate();

useEffect(() => {
    fetch(process.env.REACT_APP_BackendAPI+'/quiz')
      .then(response => response.json())
      .then(data => setImages(data.ingr));
      
  }, []);

const handleLike = (imageName, like) => {
    console.log(`Image name: ${imageName}, Like value: ${like}`);
    setLikes({ ...likes, [imageName]: like });
   
    // console.log(voteCount,"votes");

    if ( currentIndex=== 4) {
      const ingr = Object.keys(likes).map(name => ({
        name: name,
        like: likes[name] ? 'like' : 'dislike'
      }));
    
    //ingr.user=sessionStorage.getItem("User_id");
     console.log({ingr}.ingr);
     const quiz={};
     quiz.user=sessionStorage.getItem("User_id");
     quiz.ingr={ingr}.ingr;
    console.log("quiz:",quiz);
    console.log("ingr:-->",quiz.ingr);
    console.log("user:-->",quiz.user);
     console.log("testing");
     setIsLoading(true);
     axios.post(process.env.REACT_APP_BackendAPI+'/food/recommendQuiz',quiz)
        .then(response => {

          console.log('Data received from server:', response.data);
          console.log('Data received from server:', response.data["recommendations"][0]);
          const recommendations = response.data.recommendations;
          console.log("recommendations:", recommendations)
          const count = Object.keys(recommendations[0]).length; // Assuming all objects have the same number of key-value pairs

for (let i = 0; i < recommendations.length; i++) {
  const dishName = `dish${i + 1}`;
  const dish = recommendations[i];
  localStorage.setItem(dishName, JSON.stringify(dish));
}

console.log(`Total number of recs: ${count+1}`);

localStorage.setItem("QuizRespJson", JSON.stringify(response.data)) ;
//console.log(localStorage);
          // localStorage.setItem("dish1", JSON.stringify(response.data["recommendations"][0]))
          // localStorage.setItem("dish2", JSON.stringify(response.data["recommendations"][1]))
          // localStorage.setItem("dish3", JSON.stringify(response.data["recommendations"][2]))
          setIsLoading(false);
          history("/Frop")
        })
    } else {
        setVoteCount(voteCount + 1);
      setCurrentIndex(currentIndex + 1);
      setClickCount(clickCount + 1);
    }
  };
 

  return (
    <>
      <NavbarTemp/>
      <div className="hmpagebodydiv">
        <br />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {images.length > 0 && images[currentIndex]?.link && (
              <div key={images[currentIndex].name}>
                <img
                  className="gallery"
                  src={images[currentIndex].link}
                  alt={images[currentIndex].name}
                />
                <div className="FoodImageNameforQuiz">
                  <h3>{images[currentIndex].name}</h3>
                </div>
                <Button
                  onClick={() => handleLike(images[currentIndex].name, true)}
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
                  Like
                </Button>
                <Button
                  onClick={() => handleLike(images[currentIndex].name, false)}
                  variant="contained"
                  color="error"
                  size="large"
                  sx={{
                    width: 200,
                    padding: 1,
                    margin: 2,
                    borderRadius: 50,
                    boxShadow: 50
                  }}
                >
                  Dislike
                </Button>
              </div>
            )}
          </>
        )}
        <Button
          size="large"
          variant="contained"
          color="success"
          sx={{ padding: 1, margin: 2, boxShadow: 50 }}
          href="/Likedis"
        >
          Skip and Enter Ingredients
        </Button>
      </div>
      <div></div>
    </>
  );
                }
export default FoodRectrial;