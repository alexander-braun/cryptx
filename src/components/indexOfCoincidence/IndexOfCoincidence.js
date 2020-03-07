import React from 'react'
import ExpandMenueInput from '../general/ExpandMenueInput'
function IndexOfCoincidence({ioc, menue}) {
    
    return (
        <div className="controller">
                {menue === 'input' ? <ExpandMenueInput menue = {menue} method = 'Index of Coincidence'/> : <ExpandMenueInput menue = {menue} method = 'Index of Coincidence'/>}
            <div className="coincidence_menue">
                <h1>{ioc}</h1>
            </div>
        </div> 
    )
}

export default IndexOfCoincidence