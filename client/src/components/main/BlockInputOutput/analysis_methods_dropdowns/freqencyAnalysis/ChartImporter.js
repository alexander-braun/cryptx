import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Barchart from './Barchart';
import { frequencies_per_language } from './data';
import { languages } from './data';
import IcTooltipRemoveAnalysisMethod from '../../IcTooltipRemoveAnalysisMethod';
import IcTooltipExplanatory from '../../IcTooltipExplanatory';
import './frequency-analysis.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    fontSize: '14px',
  },
}));

function ChartImporter({ inputValue, menue }) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const classes = useStyles();
  const [panelStatus, changePanelStatus] = useState(false);

  return (
    <ExpansionPanel
      square={true}
      onChange={() => changePanelStatus(!panelStatus)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography className={classes.heading}>Frequency Analysis</Typography>
        <IcTooltipExplanatory method={'frequency-analysis'} />
        <IcTooltipRemoveAnalysisMethod
          menue={menue}
          method={'frequency-analysis'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className='barchart'>
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
        <div className='frequency-analysis-language'>
          {panelStatus ? (
            <Fragment>
              <label htmlFor='fq-lang-select' className={classes.label}>
                Language to compare to:
              </label>
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
        </div>
      </ExpansionPanelDetails>
      <ExpansionPanelDetails>
        <Typography className={classes.body}>
          The blue <b>dots</b> represent your input. The red <b>bars </b>
          represent the standart distributon of letters in the{' '}
          {selectedLanguage} language.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default ChartImporter;
