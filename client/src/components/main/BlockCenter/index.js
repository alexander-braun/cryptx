import React from 'react';
import ExplanatoryText from './ExplanatoryText';
import BlockHeadSettings from './HeadSettings';
import Settings from './EncryptionMethodSettings';

const BlockCenter = () => {
  return (
    <div className='block_settings'>
      <BlockHeadSettings />
      <div className='block_body'>
        <div className='block_body_input'>
          <Settings />
          <ExplanatoryText />
        </div>
      </div>
    </div>
  );
};

export default BlockCenter;
