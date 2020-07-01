import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import IcTooltipExplanatory from '../../IcTooltipExplanatory';
import IcTooltipRemoveAnalysisMethod from '../../IcTooltipRemoveAnalysisMethod';
import './ioc.scss';
import { calcIndexOfCoincidence, calcLanguageProbability } from './ioc-logic';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    fontSize: theme.typography.pxToRem(18),
  },
}));

function IndexOfCoincidence({ menue, input, output }) {
  const [expandedStatus, changeExpandedStatus] = useState(false);
  const classes = useStyles();

  const ioc =
    menue === 'input'
      ? calcIndexOfCoincidence(input)
      : calcIndexOfCoincidence(output);

  const languageProbability = calcLanguageProbability(ioc);

  const iocInformations = () => {
    if (!ioc && ioc !== 0) return 'no input';
    else
      return (
        <div className='ioc-information'>
          <div className='ioc-information__category'>
            <span className='ioc-information__text'>IC per letter =</span>
            &nbsp;{parseFloat(ioc).toFixed(4)}
          </div>
          <div className='ioc-information__category'>
            <span className='ioc-information__text'>Σ IC's =</span>
            &nbsp;{parseFloat(ioc * 26).toFixed(4)}
          </div>
          <div className='ioc-information__category'>
            <span className='ioc-information__text'>Text IC closest to</span>
            &nbsp;{languageProbability}
          </div>
        </div>
      );
  };

  return (
    <ExpansionPanel
      square={true}
      onChange={() => {
        changeExpandedStatus(!expandedStatus);
      }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography className={classes.heading}>
          Index Of Coincidence (IC)
        </Typography>
        <IcTooltipExplanatory method={'index-of-coincidence'} />
        <IcTooltipRemoveAnalysisMethod
          menue={menue}
          method={'index-of-coincidence'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.body}>
        {expandedStatus ? iocInformations() : ''}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  output: state.output,
});

export default connect(mapStateToProps)(IndexOfCoincidence);
