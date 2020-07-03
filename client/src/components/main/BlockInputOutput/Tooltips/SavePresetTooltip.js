import React, { Fragment } from 'react';

//MUI
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PublishIcon from '@material-ui/icons/Publish';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const SavePresetTooltip = () => {
  return (
    <StyledTooltip title={<Fragment>Save as Preset</Fragment>}>
      <PublishIcon className='block__head-button-svg' />
    </StyledTooltip>
  );
};

export default SavePresetTooltip;
