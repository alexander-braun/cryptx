import React from 'react'

const KeywordVigenere = ({keyword, updateKeyword}) => {
  return (
    <div className="controller">
      <div className="settings_name">Keyword</div>
      <div className="settings_operators">
          <textarea 
            id="alphabet" 
            defaultValue={keyword} 
            onChange = {(evt) => {
                updateKeyword(evt)
            }}
          />
      </div>
    </div>
  )
}

export default KeywordVigenere
