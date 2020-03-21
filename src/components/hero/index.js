import React from 'react';


function Hero() {

  const scrollToSignup = (e) => {
    setTimeout(() => {
      window.location.hash = '#timeline';  
      let navbar = document.getElementsByClassName('site_header')[0]
      let navbarHeight = navbar.clientHeight;
      let scrollHeight = document.querySelector('#timeline').offsetTop - navbarHeight;
      window.scroll(0,scrollHeight);
      e.preventDefault();
    }, 200)
    setTimeout(() => {
      let svg = document.getElementById('scrolldown')
      if(svg.classList.contains('rollaway')) {
        svg.classList.remove('rollaway')
      }  
    }, 700)
  }

  const removeBounce = () => {
    let svg = document.getElementById('scrolldown')
    if(svg) {
      svg.classList.remove('bounce') 
    }
  }

  const addClass = () => {
    let svg = document.getElementById('scrolldown')
    if(!svg.classList.contains('rollaway')) {
      svg.classList.add('bounce')
    }
  }

  const addRollawayAnim = () => {
    let svg = document.getElementById('scrolldown')
    if(!svg.classList.contains('rollaway')) {
      svg.classList.add('rollaway')
    }
  }

  return (
    <>
      <div id='hero'>
        <div id="hero_text">
          <h1>A Cryptographic Playground for Everybody.</h1>
          <h3>Unlock Free Access to all Features&nbsp; 
            <div className="hero_link"><a href="#timeline">now</a>
            </div>
          </h3>
        </div>
        <div className="hero_a_container" onClick={e => {scrollToSignup(e)}}>
          <svg  id="scrolldown" 
                xmlns="http://www.w3.org/2000/svg" 
                height="64" 
                viewBox="0 0 24 24" 
                width="64" 
                className="bounce" 
                onMouseOut={addClass} 
                onMouseMove={removeBounce}
                onClick={addRollawayAnim}
                >
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#f54444', stopOpacity:'1'}} />
              <stop offset="100%" style={{stopColor:'#3daae9', stopOpacity:'1'}} />
            </linearGradient>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <circle id="circle1" cx="15.5" cy="9.5" r="1.5" fill="url(#grad2)"/>
            <circle cx="8.5" cy="9.5" r="1.5" fill="url(#grad2)"/>
            <path fill="url(#grad2)" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Hero;