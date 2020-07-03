import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Assets
import '../login_signup.scss';

//Actions
import { login } from '../../../actions/authenticate';

//Components
import Alert from '../../alert';
import { SvgTop } from '../SvgTop';
import { SvgBottom } from '../SvgBottom';
import { Copyright } from '../Copyright';

//MUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { LoginStyles } from './LoginStyles';

const Login = (props) => {
  /**
   * Exported styles for MUI
   */
  const classes = LoginStyles();

  /**
   * Login Data
   */
  const [formData, updateFormdata] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  /**
   * Set email, password in state
   */
  const onChange = (e) =>
    updateFormdata({ ...formData, [e.target.name]: e.target.value });

  /**
   * Try login action
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  /**
   * Send user to landing page after
   * authentification
   */
  if (props.isAuthenticated) {
    window.location.href = '/';
  }

  return (
    <div className='login-section'>
      <SvgTop />
      <Alert />
      <div className='login-section__form'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
              <TextField
                className={classes.form}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Email'
                name='email'
                autoComplete='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => onChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to='#' variant='body2' className={classes.link}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={process.env.PUBLIC_URL + '/signup'}
                    className={classes.link}
                    variant='body2'
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
      <SvgBottom />
    </div>
  );
};

const mapActionsToProps = {
  login: login,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
