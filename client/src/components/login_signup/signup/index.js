import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Assets
import '../login_signup.scss';
import { SignupStyles } from './SignupStyles';

//Components
import { setAlert } from '../../../actions/alert';
import Alert from '../../alert';
import { Copyright } from '../Copyright';
import { SvgBottom } from '../SvgBottom';
import { SvgTop } from '../SvgTop';

//Actions
import { register } from '../../../actions/authenticate';

//MUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const SignIn = (props) => {
  /**
   * Exported styles for MUI
   */
  const classes = SignupStyles();

  /**
   * Signup Data
   */
  const [formData, updateFormdata] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  /**
   * Set name, email, password in state
   */
  const onChange = (e) =>
    updateFormdata({ ...formData, [e.target.name]: e.target.value });

  /**
   * Try signup action
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    props.register({ name, email, password });
  };

  /**
   * Send user to landing page after
   * authentification
   */
  if (props.isAuthenticated) {
    window.location.href = '/';
  }

  return (
    <div className='signup-section'>
      <SvgTop />
      <Alert />
      <div className='signup-section__form'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    label='Name'
                    name='name'
                    autoComplete='name'
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link
                    to={process.env.PUBLIC_URL + '/login'}
                    className={classes.link}
                    variant='body2'
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
      <SvgBottom />
    </div>
  );
};

const mapActionsToProps = {
  setAlert: setAlert,
  register: register,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionsToProps)(SignIn);
