import React from 'react'
import { connect } from 'react-redux'
import setKeywordPlayfair from '../../actions/setKeywordPlayfair'

const TrifidSettings = (props) => {

  return (
    <React.Fragment>
        <div className="controller">
            <div className="settings_name">Trifid Keyword</div>
            <div className="settings_operators">
                <textarea 
                id="alphabet" 
                defaultValue={'FELIX MARIE DELASTELLE'}
                
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
                    
                >
                -
                </div>
                <div 
                    className="settings_operator" 
                    id="caesar_shift_value"
                    >

                </div>
                <div 
                    value="+"
                    id="plus_caesar"
                    className="settings_operator" 
                    
                >
                +
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({

})

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(TrifidSettings)
