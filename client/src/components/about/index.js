import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <h1>Cryptx</h1>
        <p className='about-content__paragraph'>... started in 2020.</p>
        <p className='about-content__paragraph'>
          The project was created by{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/alexander-braun/cryptx'
          >
            Alexander Braun
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
