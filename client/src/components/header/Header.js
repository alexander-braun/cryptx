import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResizeObserver from 'react-resize-observer';

// Assets
import './header.scss';
import logo from './img/key.png';

// Components
import { HeaderStyles } from './HeaderStyles';
import PropTypes from 'prop-types';

//Actions
import { logout } from '../../actions/authenticate';

//Helper
import HideElementOnScroll from '../hideOnScroll';

//MUI
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
  let [height, updateHeight] = useState();
  let [width, updateWidth] = useState();
  const [drawerOpen, setDrawer] = useState(false);

  /**
   * Toggles the mobile menue on the app-bar.
   */
  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
  };

  const classes = HeaderStyles();

  const authLinksDesktop = (
    <div className='menue-items'>
      <Typography variant='body1' noWrap className={classes.itemWrapper}>
        <Link className={classes.link} to='#!' onClick={props.logout}>
          Logout
        </Link>
      </Typography>
      <Typography variant='body1' noWrap className={classes.itemWrapper}>
        <Link className={classes.link} to='/Profile'>
          Profile
        </Link>
      </Typography>
      <Typography variant='body1' noWrap className={classes.itemWrapperRight}>
        <Link className={classes.link} to='/About'>
          About
        </Link>
      </Typography>
    </div>
  );

  const guestLinksDesktop = (
    <div className='menue-items'>
      <Typography variant='body1' noWrap className={classes.itemWrapper}>
        <Link className={classes.link} to='/Login'>
          Login
        </Link>
      </Typography>
      <Typography variant='body1' noWrap className={classes.itemWrapper}>
        <Link className={classes.link} to='/Signup'>
          Signup
        </Link>
      </Typography>
      <Typography variant='body1' noWrap className={classes.itemWrapperRight}>
        <Link className={classes.link} to='/About'>
          About
        </Link>
      </Typography>
    </div>
  );

  const authLinksMobile = (
    <Fragment>
      <List onClick={toggleDrawer}>
        <Link to='/'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link to='#!' onClick={props.logout}>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </Link>
        <Link to='/Profile'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>
        <Link to='/About'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  const guestLinksMobile = (
    <Fragment>
      <List onClick={toggleDrawer}>
        <Link to='/'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link to='/Login'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary='Login' />
          </ListItem>
        </Link>
        <Link to='/Signup'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Signup' />
          </ListItem>
        </Link>
        <Link to='/About'>
          <ListItem button className={classes.itemMobile}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  const iconMenue = (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      onClick={toggleDrawer}
      edge='start'
      className={`${classes.menuButton} ${drawerOpen && classes.hide}`}
    >
      <MenuIcon className={classes.MenuIcon} />
    </IconButton>
  );

  const menueItems = () => {
    if (width > 700) {
      return (
        !props.auth.loading && (
          <Fragment>
            {props.auth.isAuthenticated ? authLinksDesktop : guestLinksDesktop}
          </Fragment>
        )
      );
    } else {
      return iconMenue;
    }
  };

  return (
    <div
      className={
        !HideElementOnScroll() &&
        !props.presetsModal &&
        !props.analysisModal &&
        !props.modalOpen
          ? 'nav-normal'
          : 'nav-hidden'
      }
    >
      <div className='header-margin' style={{ height: `${height}px` }}></div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <ResizeObserver
            onResize={(rect) => {
              updateHeight(rect.height);
              updateWidth(rect.width);
            }}
          />
          <Toolbar>
            <Typography className={classes.titleWrapper} variant='h6' noWrap>
              <div className='site-title'>
                <Link to={'/'}>cryptx</Link>
                <Link to={'/'}>
                  <img
                    src={logo}
                    className='site-title__image'
                    alt='logo'
                  ></img>
                </Link>
              </div>
            </Typography>
            {menueItems()}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='right'
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List onClick={toggleDrawer}>
            {!props.auth.loading && (
              <Fragment>
                {props.auth.isAuthenticated
                  ? authLinksMobile
                  : guestLinksMobile}
              </Fragment>
            )}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  presetsModal: state.presetsModal.modalOpen,
  analysisModal: state.analysisModal,
  modalOpen: state.modal,
});

const mapActionsToProps = {
  logout: logout,
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
