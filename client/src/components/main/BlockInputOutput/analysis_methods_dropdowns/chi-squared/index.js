import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//MUI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Helper
import languages from './letterFrequency';
import { chiSquaredCalculation } from './chi-logic';

//Assets
import { ChiSquaredStyles } from './ChiSquaredStyles';

//Components
import AnalysisMethodsExplanationTooltip from '../../Tooltips/AnalysisMethodsExplanationTooltip';
import RemoveAnalysisMethodButton from '../RemoveAnalysisMethodButton';

function ChiSquared(props) {
  const [expandedStatus, changeExpandedStatus] = useState(false);
  const [language, setLanguage] = useState('English');
  const classes = ChiSquaredStyles();
  /**
   * Use the right data from the belonging block
   */
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
        <AnalysisMethodsExplanationTooltip
          method={'chi-squared'}
          menue={props.menue}
        />
        <RemoveAnalysisMethodButton
          menue={props.menue}
          method={'chi-squared'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.body}>
        {expandedStatus ? (
          <Fragment>
            <label htmlFor='chi_lang_select' className={classes.label}>
              Language to compare to:
            </label>
            <select
              className={classes.select}
              onClick={(evt) => setLanguage(evt.target.value)}
            >
              {Object.keys(languages).map((language) => {
                return (
                  <option key={language} className={classes.option}>
                    {language}
                  </option>
                );
              })}
            </select>
            <div className={classes.result}>
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

ChiSquared.propTypes = {
  output: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ChiSquared);
