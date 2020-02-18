import React from 'react'

const CaesarShift = ({minus, cShift, plus, encrypt}) => {
  return (
    <div className="controller">
      <div className="settings_name">SHIFT</div>
      <div className="settings_operators">
          <div 
            className="settings_operator" 
            onClick={() => {
              minus()
              encrypt()
            }}
          >
          -
          </div>
          <div 
            className="settings_operator" 
            id="caesar_shift_value"
          >
          {cShift}
          </div>
          <div 
            className="settings_operator" 
            onClick={() => {
              plus()
              encrypt()
            }}
          >
          +
          </div>
      </div>
    </div>
  )
}

export default CaesarShift
