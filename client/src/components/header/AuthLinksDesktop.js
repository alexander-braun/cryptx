import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { logout } from '../../actions/authenticate';

//Assets
import { HeaderStyles } from './HeaderStyles';

//MUI
import Typography from '@material-ui/core/Typography';

const AuthLinksDesktop = (props) => {
  const classes = HeaderStyles();
  return (
    <nav className='menue-items'>
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
    </nav>
  );
};

const mapActionsToProps = {
  logout: logout,
};

AuthLinksDesktop.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, mapActionsToProps)(AuthLinksDesktop);
