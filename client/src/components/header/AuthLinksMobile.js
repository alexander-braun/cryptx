import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { logout } from '../../actions/authenticate';

//Assets
import { HeaderStyles } from './HeaderStyles';

//MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const AuthLinksMobile = (props) => {
  const classes = HeaderStyles();

  const [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
  };

  return (
    <>
      <nav onClick={toggleDrawer}>
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
      </nav>
    </>
  );
};

const mapActionsToProps = {
  logout: logout,
};

AuthLinksMobile.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, mapActionsToProps)(AuthLinksMobile);
