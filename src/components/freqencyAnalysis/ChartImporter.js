import React, { useState } from 'react'
import Barchart from './Barchart'
import freq from './data'
import ExpandMenueInput from '../general/ExpandMenueInput'

function ChartImporter({inputValue, menue}) {
    const [data] = useState([...freq])
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    return (
        <div className="controller">
                {menue === 'input' ? <ExpandMenueInput menue={menue} method = 'Frequency Analysis'/> : <ExpandMenueInput menue={menue} method = 'Frequency Analysis'/>}
            <div className="expand_menue">
                <div className="collector_freq_button">
                    
                </div>
                <div id="freq">
                    <React.Fragment>
                        <Barchart 
                            data={data} 
                            alphabet={alphabet} 
                            inputValue={inputValue}
                        />
                    </React.Fragment>
                </div>    
                <div>
                    <p id="freq_explanatory_text"> 
                        The blue <b>dots</b> represent your input. The red <b>bars </b>
                        represent the standart distributon of letters in the english language.
                    </p>
                </div>    
            </div>
        </div> 
    )
}

export default ChartImporter