import React, { useState, Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import languages from './letterFrequency';
import IcTooltipExplanatory from '../../IcTooltipExplanatory';
import IcTooltipRemoveAnalysisMethod from '../../IcTooltipRemoveAnalysisMethod';
import { chiSquaredCalculation } from './chi-logic';

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
  select: {
    background: 'transparent',
    border: 'none',
    fontSize: '14px',
    fontWeight: '700',
    fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: '0',
    width: 'fit-content',
    textAlign: 'left',
    cursor: 'pointer',
    letterSpacing: '.05em',
  },
  option: {
    color: '#dadada',
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
  },
}));

function ChiSquared(props) {
  const [expandedStatus, changeExpandedStatus] = useState(false);
  const [language, setLanguage] = useState('English');
  const classes = useStyles();

  const input = props.menue === 'input' ? props.input : props.output;

  return (
    <ExpansionPanel
      square={true}
      onChange={() => changeExpandedStatus(!expandedStatus)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography className={classes.heading}>Chi Squared χ2</Typography>
        <IcTooltipExplanatory method={'chi-squared'} menue={props.menue} />
        <IcTooltipRemoveAnalysisMethod
          menue={props.menue}
          method={'chi-squared'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        className={classes.body}
        style={{ paddingTop: '24px', display: 'block' }}
      >
        {expandedStatus ? (
          <Fragment>
            <label htmlFor='chi_lang_select' className={classes.label}>
              Language to compare to:
            </label>
            <select
              id='chi_lang_select'
              className={classes.select}
              style={{
                marginLeft: '1em',
                backgroundColor: 'transparent',
                border: '1px solid #ffffff78',
                padding: '5px',
                fontWeight: '400',
                borderRadius: '20px',
                fontSize: '12px',
              }}
              onClick={(evt) => setLanguage(evt.target.value)}
            >
              {Object.keys(languages).map((language) => {
                return (
                  <option
                    style={{ fontWeight: '400', fontSize: '12px' }}
                    key={language}
                    className={classes.option}
                    id={language}
                  >
                    {language}
                  </option>
                );
              })}
            </select>
            <div id='chi_result' className={classes.result}>
              χ2 = {chiSquaredCalculation(language, input)}
            </div>
          </Fragment>
        ) : (
          ''
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  output: state.output,
});

export default connect(mapStateToProps)(ChiSquared);
