import React from 'react';
import ExplanatoryText from './ExplanatoryText';
import BlockHeadCenter from './BlockHeadCenter';
import Settings from './EncryptionMethodSettings';
import './center.scss';

const BlockCenter = () => {
  return (
    <div className='block-settings'>
      <BlockHeadCenter />
      <div className='block-settings__body'>
        <Settings />
        <ExplanatoryText />
      </div>
    </div>
  );
};

export default BlockCenter;
