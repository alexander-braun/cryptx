import React from 'react'
import { connect } from 'react-redux'
import { setTrifidGroupSize, setTrifidKey } from '../../actions/setTrifid'

const TrifidSettings = (props) => {

    const handleGroupSizeChange = (e) => {
        if(e === '+') {
            props.setTrifidGroupSize(props.trifidGroupSize + 1)
        } else if(e === '-') {
            props.setTrifidGroupSize(props.trifidGroupSize - 1)
        } else {
            props.setTrifidGroupSize(e.target.value)    
        }
    }

    const handleKeywordChange = (e) => {
        props.setTrifidKey(e.target.value)
    }

    return (
        <React.Fragment>
            <div className="controller">
                <div className="settings_name">Trifid Keyword</div>
                <div className="settings_operators">
                    <textarea 
                    id="alphabet" 
                    defaultValue={'FELIX MARIE DELASTELLE'}
                    onChange={(e) => handleKeywordChange(e)}
                    style={{boxShadow:'none'}}
                    />
                </div>
            </div>
            <div className="controller">
                <div className="settings_name">Trifid Group Size</div>
                <div className="settings_operators">
                    <div 
                        value = '-'
                        id="minus_caesar"
                        className="settings_operator" 
                        onClick = {() => handleGroupSizeChange('-')}
                    >
                    -
                    </div>
                    <input value={props.trifidGroupSize} onChange={e => handleGroupSizeChange(e)}></input>
                    <div 
                        value="+"
                        id="plus_caesar"
                        className="settings_operator" 
                        onClick = {() => handleGroupSizeChange('+')}
                    >
                    +
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    trifidKey: state.trifid.trifidKey,
    trifid27thLetter: state.trifid.trifid27thLetter,
    trifidGroupSize: state.trifid.trifidGroupSize
})

const mapActionsToProps = {
    setTrifidGroupSize,
    setTrifidKey
}

export default connect(mapStateToProps, mapActionsToProps)(TrifidSettings)
