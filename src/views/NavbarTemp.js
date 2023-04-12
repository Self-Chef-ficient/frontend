import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import logo from "../images/cooking.png"
import add from "./add.css"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Check from '@mui/icons-material/Check';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import {
  ListItem,
  Avatar,
  List,
  InputLabel
} from '@material-ui/core';
import {
  ArrowBack,
  HistorySharp,
  Home
} from '@material-ui/icons'
import MobileeRightMenuSlider from '@material-ui/core/Drawer';
import DehazeIcon from '@material-ui/icons/Dehaze';
import FaceIcon from '@mui/icons-material/Face';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Select, FormControl } from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import  { useState, UseEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';




const menuItems = [
  {
    listIcon: <FaceIcon />,
    listText: 'Profile',
    listPath: '/HomePage'
  },
  {
    listIcon: <Home />,
    listText: 'Food Recommendation',
    listPath: '/FoodRec'
  },
  {
    listIcon: <Home />,
    listText: 'Get Recipe',
    listPath: '/RR'
  },
  {
    listIcon: <FavoriteIcon />,
    listText: 'Favourites',
    listPath: '/Favourites'
  },
  // {
  //   listIcon: <LogoutIcon onClick={logout1} />,
  //   listText: 'Logout',
  //   listPath: '/'
  // }
]



const stylebg = {
  background: '#F9F9F9'}

export default function ButtonAppBar() {

  const classes = useStyles();
  const [state, setState] = useState({
    left: false
  })

  const [value, setValue] = useState('');

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = slider => (
    <Box component='div' style={stylebg}
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)} sx={{ width:300, color:'#6D9886', height:900, border:'white'}}>

      {/* <Avatar className={classes.avatar} src={avatar} alt='' /> */}
      <br></br>
      <img class="logo" src={logo} width={'75'} height={'75'} style={styleimg} alt='' />
      <br></br>
      
      <Divider />
      <List class="icon-button2">
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.listItem}>{listItem.listIcon}</ListItemIcon>
            <ListItemText className={classes.listItem} primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const font = "font-family: 'Delicious Handrawn', cursive;";
  const theme = createTheme({
      fontFamily:font
  })
    const styleimg = {
        display:'block',
        margin: 'auto'
       
    
    }
    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ background: '#6D9886', height:80, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)'}}>
      <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* tool bar */}
          <MobileeRightMenuSlider open={state.left}
            onClose={toggleSlider('left', false)}
            anchor='left' > {sideList('left')} </MobileeRightMenuSlider> <
              IconButton onClick={toggleSlider('left', true)} size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, paddingLeft:5, alignContent:"center"}} >
            <DehazeIcon style={
              { color: 'white' }} />
          {/* </IconButton> */}
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            
          </IconButton>

          {/* tool bar */}
          {/* <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, paddingLeft:5, alignContent:"center"}}

          >
            <MenuIcon />
           
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'grey',
              textDecoration: 'none',
            }}
          >
            <img class="logo" src={logo} width={'70'} height={'70'} style={styleimg} alt=''  />
          </Typography>
        {/* <Toolbar> */}
       
          <Typography variant="h5" component="div" className='abc' >
           
            <a class="head1" href='/HomePage' style={{textDecoration: 'none', color:'white'}}>Self Chef-ficient  </a>
          </Typography>
         
          <Button  size="large" color="inherit" sx ={{ flexGrow: 1, justifyContent:'right', paddingRight:5, fontFamily:font, fontWeight:"bold"}}>My Profile</Button>
         
        
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

