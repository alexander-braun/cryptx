import React, { useState } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../styles/login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authenticate';
import Alert from '../alert';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        style={{ color: '#4ab2eec0' }}
        to='https://alexander-braun.github.io/strngcrypt/'
      >
        Cryptx
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
    borderColor: '#ffffff',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [formData, updateFormdata] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    props.login(email, password);
  };
  if (props.isAuthenticated) {
    window.location.href = '/';
  }
  return (
    <div id='login_section'>
      <svg
        fill='rgb(23, 114, 167)'
        id='curveDownColor'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='100%'
        height='15vh'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop
            offset='0%'
            style={{ stopColor: 'rgb(13, 78, 115)', stopOpacity: '1' }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'rgb(23, 114, 167)', stopOpacity: '1' }}
          />
        </linearGradient>
        <path d='M0 0 C 50 100 80 100 100 0 Z' fill='url(#grad2)'></path>
      </svg>
      <Alert />
      <div id='login_form'>
        <Container id='signin_mainpage' component='main' maxWidth='xs'>
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
                id='email'
                label='Email Address'
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
                id='password'
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
                  <Link
                    style={{ color: '#4ab2eec0', textDecoration: 'none' }}
                    to='#'
                    variant='body2'
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={process.env.PUBLIC_URL + '/signup'}
                    style={{ color: '#4ab2eec0', textDecoration: 'none' }}
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
      <svg
        id='curveUpColor'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='100%'
        height='100'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <defs>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop
              offset='0%'
              style={{ stopColor: 'rgb(13, 78, 115)', stopOpacity: '1' }}
            />
            <stop
              offset='100%'
              style={{ stopColor: 'rgb(23, 114, 167)', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>
        <path d='M0 100 C 20 0 50 0 100 100 Z' fill='url(#grad1)'></path>
      </svg>
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
