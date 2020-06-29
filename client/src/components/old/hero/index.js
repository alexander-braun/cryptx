import React, { Fragment } from 'react';
import { Animated } from 'react-animated-css';
import 'animate.css/animate.css';
import './hero.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Hero(props) {
  const scrollToSignup = (e) => {
    setTimeout(() => {
      let navbar = document.getElementsByClassName('site_header')[0];
      let navbarHeight = navbar.clientHeight;
      let scrollHeight =
        document.querySelector('#timeline').offsetTop - navbarHeight;
      window.scroll(0, scrollHeight);
      e.preventDefault();
    }, 200);
    setTimeout(() => {
      let svg = document.getElementById('scrolldown');
      if (svg.classList.contains('rollaway')) {
        svg.classList.remove('rollaway');
      }
    }, 700);
  };

  const removeBounce = () => {
    let svg = document.getElementById('scrolldown');
    if (svg) {
      svg.classList.remove('bounce');
    }
  };

  const addClass = () => {
    let svg = document.getElementById('scrolldown');
    if (!svg.classList.contains('rollaway')) {
      svg.classList.add('bounce');
    }
  };

  if (props.isAuthenticated) {
    return null;
  }

  return props.isAuthenticated ? null : (
    <Fragment>
      <div id='hero'>
        <div id='hero_text'>
          <Animated
            animationInDelay={200}
            animationIn='bounceInDown'
            animationInDuration={1000}
            isVisible={true}
          >
            <h1>
              "If you think cryptography is the answer to your problem, &nbsp;
              <br></br> then you don't know what your problem is."
            </h1>
            <h2>Peter G. Neumann</h2>
          </Animated>
          <Animated
            animationInDelay={0}
            animationIn='bounceInDown'
            animationInDuration={1000}
            isVisible={true}
          >
            <h3>
              <div className='hero_link'>
                <Link to='/signup'>Signup for free now!</Link>
              </div>
            </h3>
          </Animated>
        </div>

        <Animated
          animationInDelay={300}
          animationIn='fadeInUpBig'
          animationInDuration={400}
          isVisible={true}
        >
          <div
            className='hero_a_container'
            onClick={(e) => {
              scrollToSignup(e);
            }}
          >
            <svg
              id='scrolldown'
              className='bounce'
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 438.533 438.533'
              onMouseOut={addClass}
              onMouseMove={removeBounce}
              fill='rbg(255,255,255'
            >
              version="1.1" width="100%" height="15vh" viewBox="0 0 100 100"
              preserveAspectRatio="none"
              <linearGradient id='grad3' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop
                  offset='0%'
                  style={{ stopColor: '#dededee6', stopOpacity: '1' }}
                />
                <stop
                  offset='100%'
                  style={{ stopColor: '#dededee6', stopOpacity: '1' }}
                />
              </linearGradient>
              <path
                className='heroSvg'
                fill='url(#grad3)'
                d='M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
                c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
                c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
                s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
                C438.533,179.485,428.732,142.795,409.133,109.203z M361.733,204.705L232.119,334.324c-3.614,3.614-7.9,5.428-12.849,5.428
                c-4.948,0-9.229-1.813-12.847-5.428L76.804,204.705c-3.617-3.615-5.426-7.898-5.426-12.845c0-4.949,1.809-9.235,5.426-12.851
                l29.119-29.121c3.621-3.618,7.9-5.426,12.851-5.426c4.948,0,9.231,1.809,12.847,5.426l87.65,87.65l87.65-87.65
                c3.614-3.618,7.898-5.426,12.847-5.426c4.949,0,9.233,1.809,12.847,5.426l29.123,29.121c3.621,3.616,5.428,7.902,5.428,12.851
                C367.164,196.807,365.357,201.09,361.733,204.705z'
              />
            </svg>
          </div>
        </Animated>
      </div>
    </Fragment>
  );
}

Hero.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Hero);
