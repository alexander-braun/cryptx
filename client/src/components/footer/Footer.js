import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './footer.scss';

const Footer = () => {
  return (
    <div className='site-footer'>
      <div className='site-footer__links'>
        <a
          href='https://github.com/alexander-braun/cryptx'
          target='blank'
          style={{ color: 'white' }}
          className='site-footer__icon'
        >
          <GitHubIcon />
        </a>
        &copy; 2020 Alexander Braun
      </div>
    </div>
  );
};

export default Footer;
