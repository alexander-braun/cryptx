import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <h1 className='about-content__app-title'>Cryptx</h1>
        <p className='about-content__paragraph'>... started in 2020.</p>
        <p className='about-content__paragraph about-content__paragraph--inline'>
          The project was created by&nbsp;
        </p>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/alexander-braun/cryptx'
          className='about-content__link'
        >
          Alexander Braun.
        </a>
      </div>
    </div>
  );
};

export default About;
