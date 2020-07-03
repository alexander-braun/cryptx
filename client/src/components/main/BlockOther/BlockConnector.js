import React from 'react';
import PropTypes from 'prop-types';

const BlockConnector = ({ sign }) => (
  <div className='block-connector'>{sign}</div>
);

BlockConnector.propTypes = {
  sign: PropTypes.string.isRequired,
};

export default BlockConnector;
