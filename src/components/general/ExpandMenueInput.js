import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';

function ExpandMenueInput({method, menue}) {

    let expMenue
    let helperText
    let index

    switch(method) {
        case 'Frequency Analysis':
            index = menue === 'output' ? 1 : 0
            expMenue = document.getElementsByClassName('expand_menue')[index]
            helperText = (
                `Studies the distribution and frequency of letters in a text. Every language has a unique pattern of
                letter distribution and is identifiable by that pattern on a chart. Different encryption methods show
                distinguished pattern changes in the graph and make the frequency analysis a good tool to solve classic
                ciphertexts.`
            )

            break
        case 'Index of Coincidence':
            index = menue === 'output' ? 1 : 0
            expMenue = document.getElementsByClassName('coincidence_menue')[index]
            helperText = (
                `Is an indicator for the frequency of wich letters appears in a text.
                Different languages and encryption algorithms have distinguishable IC's. This makes the IC a good tool
                to analyse how a given text is encrypted. F.e. the skytale method isn't transforming a letter, just it's
                placement. The IC stays exactly the same. A One time pad algorithm is equalizing the distribution 
                of letters and has an equal chance for every given letter to appear. The IC will be 0.037 - 0.038 (1/26).`
                )
            break
        default: 
            return
    }

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
                <Typography color="inherit">{method}</Typography>
                {helperText}
            </React.Fragment>
            }
        >
            <Button><InfoIcon></InfoIcon></Button>
        </StyledTooltip>
    )


    return (
        <div className="expandbutton_field" onClick={() => {
            if(expMenue) {
                if (expMenue.style.maxHeight){
                    expMenue.style.maxHeight = null;
                  } else {
                    expMenue.style.maxHeight = expMenue.scrollHeight + "px";
                  } 
            }
        }}>
            <div className="expandbutton_name">{method}</div>
            <div className="informational_modal">{icTooltip}</div>
            <div className="controll_handles">
                <div className="button_menue"></div> 
            </div>
        </div>
        
    )
}

export default ExpandMenueInput