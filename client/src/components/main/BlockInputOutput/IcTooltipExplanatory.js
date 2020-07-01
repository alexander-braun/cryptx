import Typography from '@material-ui/core/Typography';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

function IcTooltipExplanatory({ method }) {
  return (
    <StyledTooltip
      title={
        method === 'frequency-analysis' ? (
          <React.Fragment>
            <Typography color='inherit'>Frequency Analysis</Typography>
            Studies the distribution and frequency of letters in a text. Every
            language has a unique pattern of letter distribution and is
            identifiable by that pattern on a chart. Different encryption
            methods show distinguished pattern changes in the graph and make the
            frequency analysis a good tool to solve classic ciphertexts.
          </React.Fragment>
        ) : method === 'index-of-coincidence' ? (
          <React.Fragment>
            <Typography color='inherit'>Index Of Coincidence (IC)</Typography>
            Is an indicator for the frequency of wich letters appears in a text.
            Different languages and encryption algorithms have distinguishable
            IC's. This makes the IC a good tool to analyse how a given text is
            encrypted. F.e. the skytale method isn't transforming a letter, just
            it's placement. The IC stays exactly the same. A One time pad
            algorithm is equalizing the distribution of letters and has an equal
            chance for every given letter to appear. The IC will be 0.037 -
            0.038 (1/26).
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography color='inherit'>Chi Squared (χ2)</Typography>
            The Chi Squared Test is used to compare the distribution of
            plaintext and ciphertext. The lower the value, the higher the chance
            that the used setting decrypted the text.
          </React.Fragment>
        )
      }
    >
      <Button>
        <InfoIcon></InfoIcon>
      </Button>
    </StyledTooltip>
  );
}

export default IcTooltipExplanatory;
