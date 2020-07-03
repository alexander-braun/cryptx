import { makeStyles } from '@material-ui/core/styles';

export const SignupStyles = makeStyles((theme) => ({
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
  link: {
    color: '#4ab2eec0',
    textDecoration: 'none',
  },
}));
