
import Navbar from "./Navbar"
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
import cook from "../images/Cooking-01.svg"
import add from './add.css';
import { CardActionArea } from '@mui/material';


document.body.style = 'background: #F9F9F9;';
// import { Grid } from "@mui/material";
const font = "font-family: 'Delicious Handrawn', cursive";
  const theme = createTheme({
      fontFamily:font,
  })
  const useStyles = makeStyles({
    card: {
     borderRadius: 20,
     backgroundColor: theme.palette.success.light,
     color: theme.palette.primary.contrastText,
     boxShadow: "none"
    }
   });

export default function HomePage() {
 const classes=useStyles();
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
              <Card sx={{  maxWidth: 500, py: 4, height: 500 , padding:0, boxShadow:10, marginBottom:3, borderRadius:10, elevation: 24, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    transform: 'translateY(-8px)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)'}, border: '20px solid white',
      outline: 'none'}} >
              <CardActionArea href="/FoodRec">
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
                <CardActions>

                </CardActions>
                </CardActionArea>
              </Card>
              <p></p>
              <br></br>

              
            </Grid>
            <Grid item xs={10} sm={5} >
              <Card sx={{ maxWidth: 500, py: 4 , height: 500 , padding:0, boxShadow:10, borderRadius:10, elevation:24,  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
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
                <CardActions>
                  
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
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
// import Navbar from "./Navbar"
// import NavbarTemp from "./NavbarTemp"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import cook from "../images/Cooking-01.svg"
// // import { Grid } from "@mui/material";
// import { createTheme } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';
// const font = "font-family: 'Delicious Handrawn', cursive;";

//   const theme = createTheme({
//       fontFamily:font,
//   })
//   const useStyles = makeStyles({
//     card: {
//      borderRadius: 20,
//      backgroundColor: theme.palette.success.light,
//      color: theme.palette.primary.contrastText,
//      boxShadow: "none"
//     }
//    });


// export default function SignUp() {
//     return (
//       <div
//         style={{
//           backgroundImage: `url(${cook})`,
//           backgroundPosition: 'right',
//           backgroundSize: "fit",
//           backgroundRepeat: "no-repeat",
//           width: "100vw",
//           height: "100vh",
//           position: "relative", // add position relative
//         }}
//       >
//         <NavbarTemp />
//         <Container sx={{ py: 8 }} maxWidth="md">
//           <Grid container spacing={2} justifyContent="left">
//             <Grid item sx={{ maxWidth: 400, py: 4, height: 400 }}>
//               <Card sx={{ Width: 400, py: 4, height: 400 }}>
//                 <CardMedia
//                   sx={{ height: 300 }}
//                   image="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
//                   title="green iguana"

//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div" fontFamily={font}>
//                     Food Recommendation 
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                   Recommend me some dish!
//                   </Typography>
//                   <br></br>
//                   <a href="/FoodRec" style={{textDecoration: 'none', color:'white'}}>
//                   <Button size="large" variant="text" color="success" borderRadius="50">Start Recommendation</Button>
//                    </a>
//                 </CardContent>
//                 <CardActions></CardActions>
//               </Card>
//               <p></p>
//               <Button size="large" variant="contained">
//                 Recommend
//               </Button>
//             </Grid>
  
//             <Grid item sx={{ maxWidth: 400, py: 4, height: 400 }}>
//               <Card sx={{ Width: 400, py: 4, height: 400 }}>
//                 <CardMedia
//                   sx={{ height: 300 }}
//                   image="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=170667a&w=0&k=20&c=P3jIQq8gVqlXjd4kP2OrXYyzqEXSWCwwYtwrd81psDY="
//                   title="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div" fontFamily={font}>
//                     Get me Recipe
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Reccomends food based on your choices
//                   </Typography>
//                   <br></br>
//                   <a href="/RR" style={{textDecoration: 'none', color:'white'}}>
//                   <Button size="large" variant="text" color="success">Get Recipe</Button></a>
//                 </CardContent>
//                 <CardActions>
//                   {/* <Button size="small">Learn More</Button> */}
//                 </CardActions>
//               </Card>
//               <p></p>
//               <Button size="large" variant="contained">
//                 Get Recipe
//               </Button>
//             </Grid>
//           </Grid>
//         </Container>
//         <div style={{ position: "absolute", bottom: 0, width: "100%" }}></div>
//       </div>
//     );
//   }
  
  

// // export default function SignUp() {
// //     return (
// //       <div style={{backgroundImage:`url(${cook})`, backgroundPosition: 'right',
// //       backgroundSize: 'cover',
// //       backgroundRepeat: 'no-repeat',
// //       width: '100vw',
// //       height: '100vh'
// //       }}>
// //         <NavbarTemp />
// //         <Container sx={{ py: 8  }} maxWidth="md">
// //           <Grid container spacing={2} justifyContent="center">
// //             <Grid item sx={{ maxWidth: 400, py: 4 , height: 400, paddingRight:10 }}>
// //               <Card sx={{ maxWidth: 400, py: 4 , height: 400 }}>
// //                 <CardMedia
// //                   sx={{ height: 240 }}
// //                   image="/static/images/cards/contemplative-reptile.jpg"
// //                   title="green iguana"
// //                 />
// //                 <CardContent>
// //                   <Typography gutterBottom variant="h5" component="div">
// //                     Food Recommendation
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Reccomends food based on your choices
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>

// //                 </CardActions>
// //               </Card>
// //               <p></p>
// //               <Button size="large" variant="contained" >Recommend</Button>
// //             </Grid>
            
// //             <Grid item sx={{ maxWidth: 400, py: 4 , height: 400 }}>
// //               <Card sx={{ maxWidth: 400, py: 4 , height: 400 }}>
// //                 <CardMedia
// //                   sx={{ height: 240 }}
// //                   image="/static/images/cards/contemplative-reptile.jpg"
// //                   title="green iguana"
// //                 />
// //                 <CardContent>
// //                   <Typography gutterBottom variant="h5" component="div">
// //                     Get Me Recipe
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                   Reccomends food based on your choices
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>
                  
// //                   {/* <Button size="small">Learn More</Button> */}
// //                 </CardActions>
// //               </Card>
// //               <p></p>
// //               <Button size="large" variant="contained">Get Recipe</Button>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </div>
// //     );
// //   }