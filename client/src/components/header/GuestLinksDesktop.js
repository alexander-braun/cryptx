import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import { HeaderStyles } from './HeaderStyles';

//MUI
import Typography from '@material-ui/core/Typography';

const GuestLinksDesktop = (props) => {
  const classes = HeaderStyles();
  return (
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
};

export default GuestLinksDesktop;
