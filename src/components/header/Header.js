import React, { useState } from 'react'
import logo from './img/key.png'
import { Link } from 'react-router-dom'
import ResizeObserver from 'react-resize-observer';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import CreateIcon from '@material-ui/icons/Create'
import '../../styles/header.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgba(26, 134, 195, 1)',
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
  let [width, updateWidth] = useState()

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menueItems = width > 700 ? 
    <Typography variant="body1" noWrap style={{marginLeft: 'auto', fontSize: '1.15rem'}}>
      {['Login', 'Signup', 'About'].map((text, index) => (
        <Link key={text} style={{color:'white', marginRight: text !== 'About' ? '1em' : '0', textDecoration:'none'}} to={text === 'Login' ? '/login' : text === 'Signup' ? '/signup' : '/about'}>
          {text}
        </Link>
      ))}
    </Typography> :
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      className={clsx(classes.menuButton, open && classes.hide)}
    >
      <MenuIcon style={{fontSize: '.7em'}} />
    </IconButton>

  return (
    <React.Fragment>
      <div id="header_margin" style={{height: `${height}px`, position: 'relative'}} className="site_header"></div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
        <ResizeObserver 
          onResize={(rect) => {
            updateHeight(rect.height)
            updateWidth(rect.width)
          }}
        />
        <Toolbar>
          <Typography variant="h6" noWrap style={{marginRight: 'auto'}}>
            <div className='site_title'>
              <Link to={'/'}><p>cryptx</p></Link><img href='/' src={logo} id="keyimage" alt="logo"></img>
            </div>
          </Typography>
          {menueItems}
        </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
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
              <Link key={text} to={text === 'Home' ? '/' : text === 'Login' ? '/login' : text === 'Signup' ? '/signup' : '/about'}>
                <ListItem button key={text} style={{color:'black', textDecoration:'none'}}>
                  <ListItemIcon>{text === 'Home' ? <HomeIcon /> : text === 'Login' ? <ExitToAppIcon /> : text === 'Signup' ? <CreateIcon /> : <InfoIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  )
}

