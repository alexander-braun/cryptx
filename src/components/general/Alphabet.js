import React from 'react'

const Alphabet = ({alphabet, alphabetUpdate, encrypt}) => {
  return (
    <div className="controller">
      <div className="settings_name">ALPHABET</div>
      <div className="settings_operators">
          <textarea 
            id="alphabet" 
            defaultValue={alphabet} 
            onChange = {(evt) => {
              alphabetUpdate(evt)
              encrypt()
            }}
          />
      </div>
    </div>
  )
}

export default Alphabet
