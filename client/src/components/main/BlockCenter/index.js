import React from 'react';
import ExplanatoryText from './ExplanatoryText';
import Head from './Head';
import Settings from './EncryptionMethodSettings';
import './center.scss';

const BlockCenter = () => {
  return (
    <div className='block-settings'>
      <Head />
      <div className='block-settings__body'>
        <Settings />
        <ExplanatoryText />
      </div>
    </div>
  );
};

export default BlockCenter;
