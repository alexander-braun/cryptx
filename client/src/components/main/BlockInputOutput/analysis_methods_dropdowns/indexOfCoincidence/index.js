import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//MUI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Components
import AnalysisMethodsExplanationTooltip from '../../Tooltips/AnalysisMethodsExplanationTooltip';
import RemoveAnalysisMethodButton from '../RemoveAnalysisMethodButton';

//Assets
import './ioc.scss';
import { IndexOfCoincidenceStyles } from './IndexOfCoincidenceStyles';

//Helpers
import { calcIndexOfCoincidence, calcLanguageProbability } from './ioc-logic';

function IndexOfCoincidence({ menue, input, output }) {
  const [expandedStatus, changeExpandedStatus] = useState(false);
  const classes = IndexOfCoincidenceStyles();

  const ioc =
    menue === 'input'
      ? calcIndexOfCoincidence(input)
      : calcIndexOfCoincidence(output);

  const languageProbability = calcLanguageProbability(ioc);

  const IocBody = () => {
    if (!ioc && ioc !== 0) return 'no input';
    else
      return (
        <div className='ioc-information'>
          <div className='ioc-information__category'>
            <span className='ioc-information__text'>IC per letter =</span>
            &nbsp;{parseFloat(ioc).toFixed(4)}
          </div>
          <div className='ioc-information__category'>
            <span className='ioc-information__text'>Text-IC =</span>
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
          Index Of Coincidence IC
        </Typography>
        <AnalysisMethodsExplanationTooltip method={'index-of-coincidence'} />
        <RemoveAnalysisMethodButton
          menue={menue}
          method={'index-of-coincidence'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.body}>
        {expandedStatus ? IocBody() : ''}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  output: state.output,
});

IndexOfCoincidence.propTypes = {
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(IndexOfCoincidence);
