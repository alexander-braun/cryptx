import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import {
  toggleAnalysisMethodFQInput,
  toggleAnalysisMethodFQOutput,
  toggleAnalysisMethodICOutput,
  toggleAnalysisMethodICInput,
  toggleAnalysisMethodCHIInput,
  toggleAnalysisMethodCHIOutput,
} from '../../../actions/toggleAnalysisMethod';
import { connect } from 'react-redux';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

function IcTooltipRemoveAnalysisMethod({
  menue,
  method,
  toggleAnalysisMethodFQInput,
  toggleAnalysisMethodFQOutput,
  toggleAnalysisMethodICOutput,
  toggleAnalysisMethodICInput,
  toggleAnalysisMethodCHIInput,
  toggleAnalysisMethodCHIOutput,
}) {
  const handleClick = () => {
    if (menue === 'input') {
      switch (method) {
        case 'frequency-analysis':
          toggleAnalysisMethodFQInput();
          break;
        case 'index-of-coincidence':
          toggleAnalysisMethodICInput();
          break;
        case 'chi-squared':
          toggleAnalysisMethodCHIInput();
          break;
        default:
          break;
      }
    } else {
      switch (method) {
        case 'frequency-analysis':
          toggleAnalysisMethodFQOutput();
          break;
        case 'index-of-coincidence':
          toggleAnalysisMethodICOutput();
          break;
        case 'chi-squared':
          toggleAnalysisMethodCHIOutput();
          break;
        default:
          break;
      }
    }
  };
  return (
    <StyledTooltip
      onClick={() => handleClick()}
      title={
        <React.Fragment>
          <Typography color='inherit'>Remove Analysis Method</Typography>
          Removes this element from the menue. You can always get it back by
          clicking the PLUS icon in the top right corner.
        </React.Fragment>
      }
    >
      <Button>
        <HighlightOffIcon></HighlightOffIcon>
      </Button>
    </StyledTooltip>
  );
}

const mapActionToProps = {
  toggleAnalysisMethodFQInput: toggleAnalysisMethodFQInput,
  toggleAnalysisMethodFQOutput: toggleAnalysisMethodFQOutput,
  toggleAnalysisMethodICOutput: toggleAnalysisMethodICOutput,
  toggleAnalysisMethodICInput: toggleAnalysisMethodICInput,
  toggleAnalysisMethodCHIInput: toggleAnalysisMethodCHIInput,
  toggleAnalysisMethodCHIOutput: toggleAnalysisMethodCHIOutput,
};

export default connect(null, mapActionToProps)(IcTooltipRemoveAnalysisMethod);
