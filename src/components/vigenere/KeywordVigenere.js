import React from 'react'

const KeywordVigenere = ({keywordVigenere, encrypt, updateKeyword}) => {
  return (
    <div className="controller">
      <div className="settings_name">Keyword</div>
      <div className="settings_operators">
          <textarea 
            id="alphabet" 
            defaultValue={keywordVigenere} 
            onChange = {(evt) => {
                updateKeyword(evt)
                encrypt()
            }}
          />
      </div>
    </div>
  )
}

export default KeywordVigenere
