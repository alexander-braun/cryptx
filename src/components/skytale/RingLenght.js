import React from 'react'

const RingLength = ({plusMinus, ringLength}) => {
  return (
    <div className="controller">
      <div className="settings_name">RING SEGMENTS</div>
      <div className="settings_operators">
          <div 
            value = '-'
            className="settings_operator" 
            id="minus_ring"
            onClick={(evt) => {
              plusMinus(evt)
            }}
          >
          -
          </div>
          <div 
            className="settings_operator" 
            id="caesar_shift_value"
          >
          {ringLength}
          </div>
          <div 
            value="+"
            id="plus_ring"
            className="settings_operator" 
            onClick={(evt) => {
              plusMinus(evt)
            }}
          >
          +
          </div>
      </div>
    </div>
  )
}

export default RingLength
