import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResizeObserver from 'react-resize-observer';
import PropTypes from 'prop-types';

// Assets
import './header.scss';
import logo from './img/key.png';
import { HeaderStyles } from './HeaderStyles';

// Components
import AuthLinksDesktop from './AuthLinksDesktop';
import GuestLinksDesktop from './GuestLinksDesktop';
import AuthLinksMobile from './AuthLinksMobile';
import GuestLinksMobile from './GuestLinksMobile';

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
            {props.auth.isAuthenticated ? (
              <AuthLinksDesktop />
            ) : (
              <GuestLinksDesktop />
            )}
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
        !props.savePresetModal &&
        !props.loadPresetModal &&
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
                {props.auth.isAuthenticated ? (
                  <AuthLinksMobile />
                ) : (
                  <GuestLinksMobile />
                )}
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
  savePresetModal: state.savePresetModal,
  loadPresetModal: state.loadPresetModal,
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
