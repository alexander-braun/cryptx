import React from 'react'
import { connect } from 'react-redux'
import updateAlphabet from '../../actions/updateAlphabet'

const Alphabet = ({alphabet, alphabetActive, updateAlphabet}) => {
  const genStyle = () => {
    return (
      {
        boxShadow: 'none',
        color: alphabetActive ? '#dadada' : 'grey'
      }
    )
  }
  return (
    <div className="controller">
      <div className="settings_name">Alphabet</div>
      <div className="settings_operators">
          <textarea
            id="alphabet" 
            value={alphabet}
            readOnly = {!alphabetActive}
            style={genStyle()}
            onChange = {(evt) => {
              updateAlphabet(evt.target.value)  
            }}
          />
      </div>
    </div>
  )
}



const mapStateToProps = state => ({
  alphabet: state.alphabet.alphabet,
  alphabetActive: state.alphabet.active
})

const mapActionsToProps = {
  updateAlphabet: updateAlphabet
}

export default connect(mapStateToProps, mapActionsToProps)(Alphabet)
