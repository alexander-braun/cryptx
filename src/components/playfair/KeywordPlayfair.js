import React from 'react'

const KeywordPlayfair = ({keyword, updateKeyword}) => {
  
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
            style={{boxShadow:'none'}}
          />
      </div>
      <div id="matrix"></div>
    </div>
  )
}

export default KeywordPlayfair
