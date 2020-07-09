import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const HeaderStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  MenuIcon: { fontSize: '2.5rem' },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: 'fixed',
    backgroundColor: '#398adb !important',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '4rem',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  itemWrapper: {
    fontSize: '1rem',
    marginRight: '1.5rem',
  },
  itemWrapperRight: {
    fontSize: '1rem',
    marginRight: '5rem',
  },
  itemMobile: {
    color: 'black',
    textDecoration: 'none',
  },
  link: {
    letterSpacing: '0.075rem',
    color: 'white',
    textDecoration: 'none',
  },
  titleWrapper: {
    marginRight: 'auto',
  },
}));
