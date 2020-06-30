import React from 'react';

const CharOptions = () => {
  return (
    <div className='contentbox contentbox--double'>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--double'>
          Letter to leave out
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <div className='content-element__settings-operator'>J</div>
        </div>
      </div>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--double'>
          Substitution letter
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <div className='content-element__settings-operator'>X</div>
        </div>
      </div>
    </div>
  );
};

export default CharOptions;
