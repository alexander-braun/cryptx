import React, { Fragment } from 'react';

//MUI
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

const LoadPresetTooltip = () => {
  return (
    <StyledTooltip title={<Fragment>Load a preset</Fragment>}>
      <GetAppIcon className='block__head-button-svg' />
    </StyledTooltip>
  );
};

export default LoadPresetTooltip;
