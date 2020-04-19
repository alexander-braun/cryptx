import React, { useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import Barchart from './Barchart'
import { freq } from './data'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { connect } from 'react-redux'
import { toggleAnalysisMethodFQInput, toggleAnalysisMethodFQOutput } from '../../actions/toggleAnalysisMethod'
import { languages } from './data'


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

const StyledTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 420,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
      },
}))(Tooltip);

let icTooltip = (
    <StyledTooltip
        title={
        <React.Fragment>
            <Typography color="inherit">Frequency Analysis</Typography>
            Studies the distribution and frequency of letters in a text. Every language has a unique pattern of
            letter distribution and is identifiable by that pattern on a chart. Different encryption methods show
            distinguished pattern changes in the graph and make the frequency analysis a good tool to solve classic
            ciphertexts.
        </React.Fragment>
        }
    >
        <Button><InfoIcon></InfoIcon></Button>
    </StyledTooltip>
)

function ChartImporter({inputValue, toggleAnalysisMethodFQInput, toggleAnalysisMethodFQOutput, menue}) {
    let icTooltipRemove = (
        <StyledTooltip
            onClick={() => menue === 'input' ? toggleAnalysisMethodFQInput() : toggleAnalysisMethodFQOutput()}
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

    
    const [selectedElement, updateSelected] = useState('English')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const classes = useStyles();
    const [panelStatus, changePanelStatus] = useState(false)

    return (
        <ExpansionPanel square={true} onChange={() => changePanelStatus(!panelStatus)}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography className={classes.heading}>Frequency Analysis</Typography>
                {icTooltip}
                {icTooltipRemove}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className="freq">
                    {
                        panelStatus ?
                            <React.Fragment>
                                <Barchart 
                                    data={[...freq[selectedElement.toLowerCase()]]} 
                                    alphabet={alphabet} 
                                    inputValue={inputValue}
                                />
                            </React.Fragment> 
                            : null
                    }
                </div> 
                <div className="freq_select" style={{marginTop:'2em'}}>
                    {
                        panelStatus ?
                            <Fragment>
                                <label htmlFor="freq_lang_select" className={classes.label}>Language to compare to:</label>
                                <select 
                                    id="freq_lang_select" 
                                    style={{marginLeft: '1em', backgroundColor: 'transparent', border: '1px solid #ffffff78', padding: '5px', fontWeight: '400', borderRadius: '20px', fontSize: '12px'}}
                                    onClick={evt => updateSelected(evt.target.value)} 
                                >
                                    {languages.map(language => {
                                        return (
                                            <option 
                                                style={{fontWeight: '400', fontSize: '12px'}} 
                                                key={language} 
                                                id={language}
                                            >
                                                {language}
                                            </option>)
                                    })}
                                </select>
                            </Fragment> : null
                    }
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
                <Typography className={classes.body}> 
                    The blue <b>dots</b> represent your input. The red <b>bars </b>
                    represent the standart distributon of letters in the {selectedElement} language.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel> 
    )
}

const mapActionToProps = {
    toggleAnalysisMethodFQInput: toggleAnalysisMethodFQInput,
    toggleAnalysisMethodFQOutput: toggleAnalysisMethodFQOutput
}


export default connect(null, mapActionToProps)(ChartImporter)