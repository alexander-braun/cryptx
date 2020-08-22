import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

//MUI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Components
import Barchart from './Barchart';
import RemoveAnalysisMethodButton from '../RemoveAnalysisMethodButton';
import AnalysisMethodsExplanationTooltip from '../../Tooltips/AnalysisMethodsExplanationTooltip';

//Assets
import { frequencies_per_language } from './data';
import { languages } from './data';
import './frequency-analysis.scss';
import { FrequencyAnalysisStyles } from './FrequencyAnalysisStyles';

function FrequencyAnalysis({ inputValue, menue }) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  /**
   * The output panel is by default expanded on pageload
   */
  const [panelStatus, changePanelStatus] = useState(
    menue === 'output' ? true : false
  );

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const classes = FrequencyAnalysisStyles();

  return (
    <ExpansionPanel
      square={true}
      onChange={() => changePanelStatus(!panelStatus)}
      expanded={panelStatus}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography className={classes.heading}>Frequency Analysis</Typography>
        <AnalysisMethodsExplanationTooltip method={'frequency-analysis'} />
        <RemoveAnalysisMethodButton
          menue={menue}
          method={'frequency-analysis'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className='frequency-analysis-barchart'>
          {panelStatus ? (
            <Barchart
              data={[
                ...frequencies_per_language[selectedLanguage.toLowerCase()],
              ]}
              alphabet={alphabet}
              inputValue={inputValue}
            />
          ) : null}
        </div>
        <div className='frequency-analysis-language__choice-wrapper'>
          {panelStatus ? (
            <Fragment>
              <label htmlFor='fq-lang-select'>Language to compare to:</label>
              <select
                id='fq-lang-select'
                className='frequency-analysis-language__select'
                onClick={(evt) => setSelectedLanguage(evt.target.value)}
              >
                {languages.map((language) => {
                  return (
                    <option
                      key={language}
                      id={language}
                      className='frequency-analysis-language__option'
                    >
                      {language}
                    </option>
                  );
                })}
              </select>
            </Fragment>
          ) : null}
        </div>{' '}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

FrequencyAnalysis.propTypes = {
  inputValue: PropTypes.string.isRequired,
  menue: PropTypes.string.isRequired,
};

export default FrequencyAnalysis;
