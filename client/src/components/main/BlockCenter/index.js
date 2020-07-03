import React from 'react';

//Components
import Head from './Head';
import Settings from './Settings';
import MoreDetails from './MoreDetails';

//Assets
import './center.scss';

const BlockCenter = () => {
  return (
    <div className='block-settings'>
      <Head />
      <div className='block-settings__body'>
        <Settings />
        <MoreDetails />
      </div>
    </div>
  );
};

export default BlockCenter;
