import React from 'react';
import ExplanatoryText from './ExplanatoryText';
import BlockHeadCenter from './BlockHeadCenter';
import Settings from './EncryptionMethodSettings';
import './center.scss';

const BlockCenter = () => {
  return (
    <div className='block-settings'>
      <BlockHeadCenter />
      <div className='block-settings__body block_body'>
        <div className='block-settings_input'>
          <Settings />
          <ExplanatoryText />
        </div>
      </div>
    </div>
  );
};

export default BlockCenter;
