import React from 'react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const IcTooltipSwapInput = () => {
  return (
    <StyledTooltip
      title={
        <React.Fragment>
          Swap Input, Output and encryption direction.
        </React.Fragment>
      }
    >
      <SwapHorizIcon
        className='headBtn'
        style={{ color: '#3e94c5', fontSize: '24px' }}
      />
    </StyledTooltip>
  );
};

export default IcTooltipSwapInput;
