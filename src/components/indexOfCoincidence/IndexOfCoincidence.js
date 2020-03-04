import React from 'react'
import ExpandMenueOutput from '../freqencyAnalysis/ExpandMenueOutput'
import ExpandMenueInput from '../freqencyAnalysis/ExpandMenueInput'

function IndexOfCoincidence({ioc, menue}) {
    
    return (
        <div className="controller">
                {menue === 'input' ? <ExpandMenueInput method = 'Index of Coincidence'/> : <ExpandMenueOutput method = 'Index of Coincidence'/>}
            <div className="coincidence_menue">
                <h1>{ioc}</h1>
            </div>
        </div> 
    )
}

export default IndexOfCoincidence