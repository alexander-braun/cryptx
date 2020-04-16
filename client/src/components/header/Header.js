import React, { Fragment, useState, useEffect, useRef } from 'react'
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
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import CreateIcon from '@material-ui/icons/Create'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import '../../styles/header.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/authenticate'

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

const Header = (props) => {

  let [height, updateHeight] = useState()
  let [width, updateWidth] = useState()
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const authLinksDesktop = (
    <div style={{marginLeft: 'auto', display: 'flex', flexDirection: 'row', justifyItems: 'center', alignItems: 'center'}}>
      <Typography variant="body1" noWrap style={{fontSize:'1rem', marginRight: '1.5rem'}}>
        <Link
          style={{letterSpacing:'0.075rem',color:'white',textDecoration:'none'}}
          to='#!'
          onClick={props.logout}
        >
          Logout 
        </Link>
      </Typography>
      <Typography variant="body1" noWrap style={{fontSize:'1rem', marginRight: '1.5rem'}}>
        <Link
          style={{letterSpacing:'0.075rem',color:'white',textDecoration:'none'}}
          to='/Profile'
        >
          Profile
        </Link>
      </Typography>
      <Typography variant="body1" noWrap style={{fontSize:'1rem', marginRight: '5vw'}}>
        <Link
          style={{letterSpacing:'0.075rem',color:'white',textDecoration:'none'}}
          to='/About'
        >
          About
        </Link>
      </Typography>
    </div>
  )

  const guestLinksDesktop = (
    <div style={{marginLeft: 'auto', display: 'flex', flexDirection: 'row', justifyItems: 'center', alignItems: 'center'}}>
      <Typography variant="body1" noWrap style={{fontSize:'1rem', marginRight: '1.5rem'}}>
        <Link
          style={{letterSpacing:'0.075rem',color:'white',textDecoration:'none'}}
          to='/Login'
        >
          Login
        </Link>
      </Typography>
      <Typography variant="body1" noWrap style={{fontSize:'1rem', marginRight: '1.5rem'}}>
        <Link
          style={{letterSpacing:'0.075rem',color:'white',textDecoration:'none'}}
          to='/Signup'
        >
          Signup
        </Link>
      </Typography>
      <Typography variant="body1" noWrap style={{fontSize:'1rem', marginRight: '5vw'}}>
        <Link
          style={{letterSpacing:'0.075rem',color:'white',textDecoration:'none'}}
          to='/About'
        >
          About
        </Link>
      </Typography>
    </div>
  )

  const authLinksMobile = (
    <Fragment>
      <List onClick={handleDrawerClose}>
        <Link to='/'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to='#!' onClick={props.logout}>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
        <Link to='/Profile'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link to='/About'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  )

  const guestLinksMobile = (
    <Fragment>
      <List onClick={handleDrawerClose}>
        <Link to='/'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to='/Login'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
        <Link to='/Signup'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Signup" />
          </ListItem>
        </Link>
        <Link to='/About'>
          <ListItem button style={{color:'black', textDecoration:'none'}}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  )

  const iconMenue = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      className={clsx(classes.menuButton, open && classes.hide)}
    >
      <MenuIcon style={{fontSize: '.7em'}} />
    </IconButton>
  )

  const menueItems = () => {
    if(width > 700) {
      return !props.auth.loading && (<Fragment>{props.auth.isAuthenticated ? authLinksDesktop : guestLinksDesktop}</Fragment>)
    } else {
        return iconMenue
      }
    }

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
              <Link to={'/'}><p>cryptx</p></Link><Link style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} to={'/'}><img style={{margin:'0', marginTop:'.2em', marginLeft:'.2em'}} src={logo} id="keyimage" alt="logo"></img></Link>
            </div>
          </Typography>
          {menueItems()}
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
            {
              !props.auth.loading && (<Fragment>{props.auth.isAuthenticated ? authLinksMobile : guestLinksMobile}</Fragment>)
            }
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapActionsToProps = {
  logout: logout
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapActionsToProps)(Header)