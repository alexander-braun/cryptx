import React, { useState } from 'react'
import Barchart from './Barchart'
import freq from './data'

function App({inputValue}) {
    const [data, setData] = useState([...freq])
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    return (
        <div className="controller">
            <div className="settings_name">FREQUENCY ANALYSIS</div>
            <div id="freq">
                <React.Fragment>
                    <Barchart 
                        data={data} 
                        alphabet={alphabet} 
                        inputValue={inputValue}
                    />
                </React.Fragment>
            </div>    
            <div id="caesar_explanatory_text">
                <p style={{fontSize: '10pt', padding: '0 16px 16px 16px', fontStyle: 'italic', fontWeight: '400', margin: '0'}}> 
                    This is a chart of how the frequency of letters in the english language compares to your textinput. The longer the
                    input, the more accurate the result becomes. The black <b>dots</b> represent your input. The red <b>bars </b>
                    represent the standart distributon of letters in the english language.
                </p>
            </div>    
        </div> 
    )
}

export default App