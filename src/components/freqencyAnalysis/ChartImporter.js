import React, { useState } from 'react'
import Barchart from './Barchart'
import freq from './data'
import ExpandMenueOutput from './ExpandMenueOutput'
import ExpandMenueInput from './ExpandMenueInput'

function ChartImporter({inputValue, menue}) {
    const [data, setData] = useState([...freq])
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    return (
        <div className="controller">
                {menue === 'input' ? <ExpandMenueInput method = 'Frequency Analysis'/> : <ExpandMenueOutput method = 'Frequency Analysis'/>}
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
                <div id="freq_explanatory_text">
                    <p style={{marginLeft: 'auto', marginRight: 'auto', fontSize: '10pt', padding: '0 16px 16px 16px', fontStyle: 'italic', fontWeight: '400', width: '80%'}}> 
                        This is a chart of how the frequency of letters in the english language compares to your textinput. The longer the
                        input, the more accurate the result becomes. The black <b>dots</b> represent your input. The red <b>bars </b>
                        represent the standart distributon of letters in the english language.
                    </p>
                </div>    
            </div>
        </div> 
    )
}

export default ChartImporter