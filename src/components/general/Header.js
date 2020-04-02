import React, { useState, Fragment } from 'react'
import logo from './img/key.png'
import { Link } from 'react-router-dom'
import ResizeObserver from 'react-resize-observer';
import Fademenue from './Fademenue'

/*
const Header = () => {
  let [width, updateWidth] = useState()
  const genMenue = (width) => {
    if(width > 700) {
      return  (
        <Fragment>
          <Link to={'/login'} id="login">Login</Link>
          <Link to={'/signup'} id="signup">Sign Up</Link>
          <Link to={'/about'} id="about">About</Link>
        </Fragment>
      )  
    } else return <Fademenue />
  }

  return (
    <>
      <div id="header_margin"></div>
      <ResizeObserver 
        onResize={(rect) => {
          updateWidth(rect.width)
        }}
      />
      <div className="site_header">
        <div className='site_title'>
          <Link id="logoimage" to={'/'}><p>cryptx</p></Link><img src={logo} id="keyimage" alt="logo"></img>
        </div>
        <div id="header_links">
          { genMenue(width) }
        </div>
      </div>
    </>

  )
}

export default Header
*/
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(10, 165, 255, 0.75)'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgba(10, 165, 255, 0.75)'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '4em',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {

  let [height, updateHeight] = useState()

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div id="header_margin" style={{height: `${height}px`, position: 'relative'}} className="site_header"></div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <ResizeObserver 
            onResize={(rect) => {
              updateHeight(rect.height)
            }}
          />
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon style={{fontSize: '.7em'}} />
            </IconButton>
            <Typography variant="h6" noWrap style={{marginLeft: 'auto'}}>
              <div className='site_title'>
                <Link to={'/'}><p>cryptx</p></Link><img src={logo} id="keyimage" alt="logo"></img>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List onClick={handleDrawerClose}>
            {['Home', 'Login', 'Signup', 'About'].map((text, index) => (
              <Link to={text === 'Home' ? '/' : text === 'Login' ? '/login' : text === 'Signup' ? '/signup' : '/about'}>
                <ListItem button key={text} style={{color:'black', textDecoration:'none'}}>
                  <ListItemIcon>{text === 'Home' ? <HomeIcon /> : text === 'Login' ? <ExitToAppIcon /> : text === 'Signup' ? <CreateIcon /> : <InfoIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
}
