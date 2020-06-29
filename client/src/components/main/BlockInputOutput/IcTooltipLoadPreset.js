import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import GetAppIcon from '@material-ui/icons/GetApp';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const IcTooltipLoadPreset = () => {
  return (
    <StyledTooltip title={<React.Fragment>Load a preset</React.Fragment>}>
      <GetAppIcon
        className='headBtn'
        style={{ color: '#3e94c5', fontSize: '24px' }}
      />
    </StyledTooltip>
  );
};

export default IcTooltipLoadPreset;