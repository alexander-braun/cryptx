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
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../alert';
import { register } from '../../actions/authenticate';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        style={{ color: '#4ab2eec0' }}
        to='https://alexander-braun.github.io/strngcrypt/'
      >
        CryptX
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
    color: '#e1e1e1',
    borderColor: 'white',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: '#e1e1e1',
    borderColor: 'white',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: '#e1e1e1',
    borderColor: 'white',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#e1e1e1',
    borderColor: 'white',
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  const [formData, updateFormdata] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;
  const onChange = (e) =>
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    props.register({ name, email, password });
  };

  if (props.isAuthenticated) {
    window.location.href = '/';
  }

  return (
    <div id='signup_section'>
      <svg
        fill='rgb(23, 114, 167)'
        id='curveDownColor'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='100%'
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
      <div id='signup_form'>
        <Container id='signup_mainpage' component='main' maxWidth='xs'>
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
                    id='name'
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
                    id='email'
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
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='Tell me, when new encryption algorithms or cryptoanalysis tools available!'
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
                    style={{ color: '#4ab2eec0', textDecoration: 'none' }}
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
      <svg
        id='curveUpColor'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='100%'
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
