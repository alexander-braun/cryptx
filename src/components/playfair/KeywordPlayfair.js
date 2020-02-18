import React from 'react'

const KeywordPlayfair = ({keywordPlayfair, encrypt, updateKeywordPlayfair}) => {
  
  return (
    <div className="controller">
      <div className="settings_name">Keyword</div>
      <div className="settings_operators">
          <textarea 
            id="alphabet" 
            defaultValue={keywordPlayfair} 
            onChange = {(evt) => {
                updateKeywordPlayfair(evt)
                encrypt()
            }}
          />
      </div>
      <div id="matrix"></div>
    </div>
  )
}

export default KeywordPlayfair
