import NavbarTemp from "./NavbarTemp";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// import { makeStyles } from "@material-ui/core/styles";
// import add from "./add.css";
// import { useState,useEffect  } from "react";
// import { useState } from "react";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
// import { styled } from "@mui/material/styles";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import Stack from "@mui/material/Stack";
// import { display } from "@mui/system";
// import { visuallyHidden } from "@mui/utils";
// import Link from "@mui/material/Link";
// import CardHeader from "@mui/material/CardHeader";
import { Paper } from "@material-ui/core";

// import pizza from "../images/pizza.png";

// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";

// import { green } from "@mui/material/colors";
//red was nextto green
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import axios from "axios";

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Recipe
//       </Typography>
//       <Typography variant="h6" component="div"></Typography>
//     </CardContent>
//     <CardActions></CardActions>
//   </React.Fragment>
// );
// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


 


export default function User() {

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
      </Paper>
    </>
  );
}