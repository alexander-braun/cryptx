import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//MUI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Assets
import './center.scss';
import { MoreDetailsStyles } from './MoreDetailsStyles';
import EncryptionMethodsTexts from './EncryptionMethodsTexts';

const MoreDetails = (props) => {
  /**
   * Import Mui Styles and check if method exists in texts.
   */
  const classes = MoreDetailsStyles();

  if (!EncryptionMethodsTexts[props.method]) return null;

  return props.direction !== 'crack' ? (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography className={classes.heading}>More Details</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.body}>
          {EncryptionMethodsTexts[props.method]['normal']}
        </Typography>
        <Typography className={classes.link}>
          <a
            href={EncryptionMethodsTexts[props.method]['linksrc']}
            target='blank'
          >
            {EncryptionMethodsTexts[props.method]['linkname']}
          </a>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ) : (
    <div className='contentbox explanation'>
      <p className='explanation__paragraph'>
        {EncryptionMethodsTexts[props.method]['crack']}
      </p>
      <a
        className='explanation__link'
        href={EncryptionMethodsTexts[props.method]['linksrc']}
        target='blank'
      >
        {EncryptionMethodsTexts[props.method]['linkname']}
      </a>
    </div>
  );
};

const mapStateToProps = (state) => ({
  direction: state.direction,
  method: state.method,
});

MoreDetails.propTypes = {
  direction: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(MoreDetails);
