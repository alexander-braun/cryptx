import React, { useState, Fragment } from 'react'
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
import { connect } from 'react-redux'
import languages from './letterFrequency'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { toggleAnalysisMethodCHIInput, toggleAnalysisMethodCHIOutput } from '../../actions/toggleAnalysisMethod'

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
    },
    select: {
        background: 'transparent',
        border: 'none',
        fontSize: '14px',
        fontWeight: '700',
        fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        padding: '0',
        width: 'fit-content',
        textAlign: 'left',
        cursor: 'pointer',
        letterSpacing: '.05em',
    },
    option: {
        color: '#dadada',
        fontSize: '14px',
    },
    label: {
        color: '#dadada',
        fontSize: '14px',
        letterSpacing: '.05em',
        fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '400',
    },
    result: {
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.192)',
    }
  
}));

let icTooltip = (
    <StyledTooltip
        title={
        <React.Fragment>
            <Typography color="inherit">Chi Squared (χ2)</Typography>
            The Chi Squared Test is used to compare the distribution of plaintext and ciphertext. The lower the value, the higher
            the chance that the used setting decrypted the text.
        </React.Fragment>
        }
    >
        <Button><InfoIcon></InfoIcon></Button>
    </StyledTooltip>
)


function ChiSquared(props) {
    let icTooltipRemove = (
        <StyledTooltip
            onClick={() => props.menue === 'input' ? props.toggleAnalysisMethodCHIInput() : props.toggleAnalysisMethodCHIOutput()}
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
    const [selectedElement, updateSelected] = useState('English')
    const classes = useStyles();

    const chiSquaredCalculation = (language) => {

        const letters = 'abcdefghijklmnopqrstuvwxyzœßàąçĉćèéêëęĝĥîìïĵłńóòŝśùŭźż'
        let input = props.menue === 'input' ? props.input : props.output

        //Puts the letter occurences of every letter into an array

        const countLetters = () => {
            let output = Array(letters.length).fill(0)
            for(let letterToSearch of letters) {
                for(let i = 0; i < input.split('').length; i++) {
                    if(letterToSearch === input.split('')[i].toLowerCase()) {
                        output[letters.indexOf(letterToSearch)] += 1
                    }
                }
            }
            return output
        }

        // Calculate the expected letter distribution for every letter and
        // put it into an array

        const calcExpectedCount = () => {
            let cleanInput = []
            for(let i = 0; i < input.length; i++) {
                if(letters.indexOf(input[i].toLowerCase()) !== -1) {
                    cleanInput.push(input[i].toLowerCase())
                }
            }
            let expectedCounts = []
            if(language !== undefined) {
                let lang = languages[language]    
                for(let letterToSearch of letters) {
                    let ind = letters.indexOf(letterToSearch)
                    expectedCounts.push(cleanInput.length / 100 * lang[ind])
                }
            }
            return expectedCounts    
        }

        // Calculates the final chi squared value
        
        const difference = () => {
            if(language !== undefined) {
                let expected = calcExpectedCount()
                let observed = countLetters()
                let singleChis = []

                let index = 0
                for(let element of observed) {

                    // Division by 0 is not possible so if ...

                    if(Math.pow((element - expected[index]), 2) !== 0 && expected[index] !== 0) {
                        singleChis.push(Math.pow((element - expected[index]), 2) / expected[index])    
                    } else singleChis.push(0)
                    index++
                }
                
                // The last step is to add the single chi squared values up to the final chi squared value for the whole text

                return singleChis.reduce((total, num) => total + num)
            }
        }
        return difference()
    }

    return (
        <ExpansionPanel square={true} onChange={function(event, expanded) {changeExpandedStatus(!expandedStatus)}}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Chi Squared χ2</Typography>
                {icTooltip}
                {icTooltipRemove}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.body} style={{paddingTop: '24px', display: 'block'}}>
                {expandedStatus ? (
                    <Fragment>
                        <label htmlFor="chi_lang_select" className={classes.label}>Language to compare to:</label>
                        <select 
                            id="chi_lang_select" 
                            className={classes.select} 
                            style={{marginLeft: '1em', backgroundColor: 'transparent', border: '1px solid #ffffff78', padding: '5px', fontWeight: '400', borderRadius: '20px', fontSize: '12px'}}
                            onClick={evt => updateSelected(evt.target.value)} 
                        >
                            {Object.keys(languages).map(language => {
                                return (
                                    <option 
                                        style={{fontWeight: '400', fontSize: '12px'}} 
                                        key={language} 
                                        className={classes.option} 
                                        id={language}
                                    >
                                        {language}
                                    </option>)
                            })}
                        </select>
                        <div id="chi_result" className={classes.result}>
                            χ2 = {chiSquaredCalculation(selectedElement)}
                        </div>
                    </Fragment>
                    ) : ''
                }
            </ExpansionPanelDetails>
        </ExpansionPanel> 
    )
}

const mapStateToProps = state => ({
    input: state.input,
    output: state.output
})

const mapActionToProps = {
    toggleAnalysisMethodCHIInput: toggleAnalysisMethodCHIInput,
    toggleAnalysisMethodCHIOutput: toggleAnalysisMethodCHIOutput
}

export default connect(mapStateToProps, mapActionToProps)(ChiSquared)