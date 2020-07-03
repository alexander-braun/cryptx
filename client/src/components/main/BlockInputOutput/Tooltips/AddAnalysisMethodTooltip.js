import React, { Fragment } from 'react';

//MUI
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const AddAnalysisMethodTooltip = () => {
  return (
    <StyledTooltip title={<Fragment>Add a analysis method</Fragment>}>
      <AddCircleOutlineIcon className='block__head-button-svg' />
    </StyledTooltip>
  );
};

export default AddAnalysisMethodTooltip;
