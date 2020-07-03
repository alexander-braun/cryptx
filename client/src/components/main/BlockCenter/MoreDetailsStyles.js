import { makeStyles } from '@material-ui/core/styles';
export const MoreDetailsStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    fontSize: theme.typography.pxToRem(14),
  },
  link: {
    marginTop: '10px',
    fontSize: theme.typography.pxToRem(14),
  },
}));
