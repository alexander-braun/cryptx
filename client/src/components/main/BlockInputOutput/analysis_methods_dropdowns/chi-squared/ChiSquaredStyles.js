import { makeStyles } from '@material-ui/core/styles';

export const ChiSquaredStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: '2',
  },
  body: {
    fontSize: theme.typography.pxToRem(18),
    paddingTop: '24px !important',
    display: 'block !important',
  },
  select: {
    fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    width: 'fit-content',
    textAlign: 'left',
    cursor: 'pointer',
    letterSpacing: '.1rem',
    marginLeft: '1em',
    border: '1px solid #ffffff78',
    padding: '5px',
    fontWeight: '400',
    borderRadius: '20px',
    fontSize: '12px',
    color: 'white',
    backgroundColor: '#525050',
  },
  option: {
    color: '#dadada',
    fontWeight: '400',
    fontSize: '14px',
  },
  label: {
    color: '#dadada',
    fontSize: '14px',
    letterSpacing: '.05em',
    fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
  },
  result: {
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.192)',
    marginTop: '20px',
  },
}));
