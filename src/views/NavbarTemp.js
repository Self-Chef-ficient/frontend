import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/cooking.png"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import {ListItem,List,} from '@material-ui/core';
import {Home} from '@material-ui/icons'
import MobileeRightMenuSlider from '@material-ui/core/Drawer';
import DehazeIcon from '@material-ui/icons/Dehaze';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteIcon from '@mui/icons-material/Favorite';
import  { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';


const menuItems = [
  {
    listIcon: <FaceIcon />,
    listText: 'Profile',
    listPath: '/Fav'
  },
  {
    listIcon: <Home />,
    listText: 'Food Recommendation',
    listPath: '/Likedis'
  },
  {
    listIcon: <Home />,
    listText: 'Get Recipe',
    listPath: '/RR'
  },
  {
    listIcon: <FavoriteIcon />,
    listText: 'Favourites',
    listPath: '/Fav'
  },
  {
    listIcon: <LogoutIcon />,
    listText: 'Logout',
    listPath: '/SignInSide'
  }
]



const stylebg = {
  background: '#F9F9F9'

}

export default function ButtonAppBar() {

  const classes = useStyles();
  const [state, setState] = useState({
    left: false
  })

  // const [value, setValue] = useState('');

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = slider => (
    <Box component='div' style={stylebg}
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)} sx={{ width:300, fontWeight: 'bolder', height:900, border:'white'}}>

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
  const UserName=sessionStorage.getItem("first_name");

  function handleLogoutClick() {
    window.location="/SignInSide";
    sessionStorage.clear()
    localStorage.clear()

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ background: '#9CA777', height:80, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)'}}>
      <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 9CA777'6D9886flex' }, mr: 1 }} /> */}
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
            
          </IconButton>
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
          <Typography variant="h5" component="div" className='abc' >
          
            <a class="head1" href='/HomePage' style={{textDecoration: 'none', color:'white'}}>Self Chef-ficient  </a>
          </Typography>
          
          <Button  size="large" color="inherit" sx ={{ flexGrow: 1, justifyContent:'right', paddingRight:5, fontFamily:font, fontWeight:"bold"}}>Hello {UserName} &nbsp;&nbsp; &nbsp;&nbsp;     </Button>
          <IconButton onClick={handleLogoutClick} >
          <LogoutIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </IconButton>
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
