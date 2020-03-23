import React, { useState } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles'

const StyledTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 420,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
      },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    body: {
      fontSize: '14px'
    }
  
}));

let icTooltip = (
    <StyledTooltip
        title={
        <React.Fragment>
            <Typography color="inherit">Index Of Coincidence</Typography>
            Is an indicator for the frequency of wich letters appears in a text.
            Different languages and encryption algorithms have distinguishable IC's. This makes the IC a good tool
            to analyse how a given text is encrypted. F.e. the skytale method isn't transforming a letter, just it's
            placement. The IC stays exactly the same. A One time pad algorithm is equalizing the distribution 
            of letters and has an equal chance for every given letter to appear. The IC will be 0.037 - 0.038 (1/26).
        </React.Fragment>
        }
    >
        <Button><InfoIcon></InfoIcon></Button>
    </StyledTooltip>
)


function IndexOfCoincidence({ioc, menue}) {
    const [expandedStatus, changeExpandedStatus] = useState(false)
    const classes = useStyles();
    
    const isThereIoc = () => {
        if(!ioc) return 'no input'
        else return ioc
    }

    return (
        <ExpansionPanel square={true} onChange={function(event, expanded) {changeExpandedStatus(!expandedStatus)}}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Index Of Coincidence</Typography>
                {icTooltip}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.body}>
                {
                    expandedStatus ? 
                    isThereIoc() : ''
                }
            </ExpansionPanelDetails>
        </ExpansionPanel> 
    )
}

export default IndexOfCoincidence