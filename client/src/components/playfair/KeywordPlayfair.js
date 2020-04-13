import React from 'react'
import { connect } from 'react-redux'
import setKeywordPlayfair from '../../actions/setKeywordPlayfair'

const KeywordPlayfair = ({keywordPlayfair, setKeywordPlayfair}) => {
  
  return (
    <div className="controller">
      <div className="settings_name">Keyword</div>
      <div className="settings_operators">
          <textarea 
            id="alphabet" 
            defaultValue={keywordPlayfair} 
            onChange = {(evt) => {
                setKeywordPlayfair(evt.target.value.toLowerCase())
            }}
            style={{boxShadow:'none'}}
          />
      </div>
      <div id="matrix"></div>
    </div>
  )
}

const mapStateToProps = state => ({
  keywordPlayfair: state.keywordPlayfair
})

const mapActionsToProps = {
  setKeywordPlayfair: setKeywordPlayfair
}

export default connect(mapStateToProps, mapActionsToProps)(KeywordPlayfair)
