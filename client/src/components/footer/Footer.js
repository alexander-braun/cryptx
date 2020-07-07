import React from 'react';

//MUI
import GitHubIcon from '@material-ui/icons/GitHub';

//Assets
import './footer.scss';

const Footer = () => {
  return (
    <div className='site-footer'>
      <div className='site-footer__links'>
        <a
          href='https://github.com/alexander-braun/cryptx'
          target='blank'
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
