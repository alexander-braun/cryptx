import React from 'react';
import logo from '../general/img/key.png'

function Hero() {
  return (
    <>
      <div id='hero'>
        <div id="hero_text">
          <h1>A Cryptographic Playground for Everybody.</h1>
          <h3>Unlock Free Access to all Features <div className="hero_link"><a href="#signup">now</a></div></h3>
          </div>
            <svg class="separator__svg" width="100%" height="50vh" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#327ca7" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100 100 V 10 L 0 100"/>
              <path d="M 30 73 L 100 18 V 0 Z" fill="#084e77" stroke-width="0"/>
          </svg>
          {/*
          <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
				    <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z"></path>
				    <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z"></path>
          </svg>
          */}
      </div>
    </>
  );
}

export default Hero;
