import React from 'react'
import { connect } from 'react-redux'
import updateAlphabet from '../../actions/updateAlphabet'

const Alphabet = ({alphabet, alphabetActive, updateAlphabet}) => {
  return (
    <div className="controller">
      <div className="settings_name">Alphabet</div>
      <div className="settings_operators">
          <textarea style={{boxShadow: 'none'}}
            id="alphabet" 
            value={alphabet}
            readOnly = {!alphabetActive}
            onChange = {(evt) => {
              updateAlphabet(evt.target.value)  
            }}
          />
      </div>
    </div>
  )
}

const mapActionsToProps = {
  updateAlphabet: updateAlphabet
}

const mapStateToProps = state => ({
  alphabet: state.alphabet
})

export default connect(mapStateToProps, mapActionsToProps)(Alphabet)
