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
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { connect } from 'react-redux'
import { toggleAnalysisMethodICOutput, toggleAnalysisMethodICInput } from '../../actions/toggleAnalysisMethod'


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
      fontSize: theme.typography.pxToRem(18),
    }
  
}));

let icTooltip = (
    <StyledTooltip
        title={
        <React.Fragment>
            <Typography color="inherit">Index Of Coincidence (IC)</Typography>
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

let probabilities = {
    'English': 1.73,
    'French': 2.02,
    'German': 2.05,
    'Italian': 1.94,
    'Portugese': 1.94,
    'Russian': 1.76,
    'Spanish': 1.94
}


function IndexOfCoincidence({ioc, toggleAnalysisMethodICInput, toggleAnalysisMethodICOutput, menue}) {
    let icTooltipRemove = (
        <StyledTooltip
            onClick={() => menue === 'input' ? toggleAnalysisMethodICInput() : toggleAnalysisMethodICOutput()}
            title={
            <React.Fragment>
                <Typography color="inherit">Remove Analysis Method</Typography>
                Removes this element from the menue. You can always get it back by clicking the PLUS icon in the top right corner.
            </React.Fragment>
            }
        >
            <Button><HighlightOffIcon></HighlightOffIcon></Button>
        </StyledTooltip>
    )

    const [expandedStatus, changeExpandedStatus] = useState(false)
    const classes = useStyles();
    
    const languageProbability = () => {
        let adjustedIOC = ioc * 26
        let tempProbability = Infinity
        let language = ''
        for(let probability of Object.keys(probabilities)) {
            let diff = probabilities[probability] - adjustedIOC
            if(Math.abs(diff) < tempProbability) {
                tempProbability = Math.abs(diff)
                language = probability
            }
        }
        return language
    }
    const isThereIoc = () => {
        if(!ioc && ioc !== 0) return 'no input'
        else return (
            <div>
                <div style={{letterSpacing:'.05rem', fontWeight: '500', color: 'rgb(214, 58, 78)', marginBottom: '2vh', fontSize:'.9rem'}}>
                    <span style={{color:'rgb(218, 218, 218)'}}>
                        IC per letter =
                    </span> 
                    &nbsp;{ioc.toFixed(4)}
                </div>
                <div style={{letterSpacing:'.05rem', fontWeight: '500', color: 'rgb(214, 58, 78)', marginBottom: '2vh', fontSize:'.9rem'}}>
                    <span style={{color:'rgb(218, 218, 218)'}}>
                    Σ IC's =
                    </span>
                    &nbsp;{(ioc * 26).toFixed(4)}
                </div>
                <div style={{letterSpacing:'.05rem', fontWeight: '500', color:'#dadada', fontSize:'.9rem'}}>
                    Text IC closest to 
                    <span style={{color: 'rgb(214, 58, 78)'}}>
                        &nbsp;{languageProbability()}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <ExpansionPanel square={true} onChange={function(event, expanded) {changeExpandedStatus(!expandedStatus)}}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Index Of Coincidence (IC)</Typography>
                {icTooltip}
                {icTooltipRemove}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.body} style={{paddingTop: '24px'}}>
                {
                    expandedStatus ? isThereIoc() : ''
                }
            </ExpansionPanelDetails>
        </ExpansionPanel> 
    )
}

const mapActionToProps = {
    toggleAnalysisMethodICInput: toggleAnalysisMethodICInput,
    toggleAnalysisMethodICOutput: toggleAnalysisMethodICOutput
}

export default connect(null, mapActionToProps)(IndexOfCoincidence)