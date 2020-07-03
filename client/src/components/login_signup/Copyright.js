import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        style={{ color: '#4ab2eec0' }}
        to='https://alexander-braun.github.io/strngcrypt/'
      >
        CryptX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
