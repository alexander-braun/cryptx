import React from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'

const BlockElementInput = ({updateInput, inputValue, clearTextareaInput}) => {

  function autoresize(evt) {
    let el = evt.target;
    el.style.height = 'inherit'
    let computed = window.getComputedStyle(el)
    let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10)
    + el.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    el.style.height = height + 'px'
  }

  return (
      <div className="block" id="user_input">
        <div className="block_top_decoration"></div>
        <div className="block_head">
            <div className="block_head_text">Input</div>
        </div>
        <div className="block_body">
            <div className="block_body_input">
                <textarea 
                  name="userinput" 
                  id="userinput" 
                  defaultValue={inputValue} 
                  onClick = {(evt) => {
                    updateInput(evt)
                    autoresize(evt)
                  }}
                  onChange={(evt) => {
                    updateInput(evt)
                    autoresize(evt)
                  }}
                />
            </div>
        </div>
          <div id="chartcontainer" style={{width: '100%'}}>
            <ChartImporter inputValue={inputValue}/>
          </div>
      </div>
  )
}

export default BlockElementInput

