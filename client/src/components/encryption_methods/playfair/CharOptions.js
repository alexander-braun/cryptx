import React from 'react';

const CharOptions = ({ setAlpha, setBeta, encrypt }) => {
  return (
    <div className='controller double_content'>
      <div className='controllbox'>
        <div className='settings_name'>Letter to leave out</div>
        <div className='settings_operators'>
          <div className='char-left-out'>J</div>
        </div>
      </div>
      <div className='controllbox' style={{ borderRight: 'none' }}>
        <div className='settings_name'>Substitution letter</div>
        <div className='settings_operators'>
          <div className='char-left-out'>X</div>
        </div>
      </div>
    </div>
  );
};

export default CharOptions;
