import React from 'react'

const Alphabet = ({alphabet, alphabetUpdate}) => {
  return (
    <div className="controller">
      <div className="settings_name">ALPHABET</div>
      <div className="settings_operators">
          <textarea 
            id="alphabet" 
            value={alphabet}
            onChange = {(evt) => {
              alphabetUpdate(evt)
            }}
          />
      </div>
    </div>
  )
}

export default Alphabet
