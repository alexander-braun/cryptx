import { makeStyles } from '@material-ui/core/styles';

export const FrequencyAnalysisStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 2,
  },
  body: {
    fontSize: '14px',
  },
}));
