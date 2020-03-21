import React from 'react'

const KeywordVigenere = ({keyword, updateKeyword}) => {
  return (
    <div className="controller">
      <div className="settings_name"
      style={{boxShadow: 'inset 0 10px 10px -10px #0000005b'}}
      >
      Keyword
      </div>
      <div className="settings_operators">
          <textarea style={{boxShadow: 'none'}}
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
