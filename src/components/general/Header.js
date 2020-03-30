import React from 'react'
import logo from './img/key.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div id="header_margin"></div>
      <div className="site_header">
        <div className='site_title'>
           <Link to={process.env.PUBLIC_URL + '/'}><p>cryptx</p></Link><img src={logo} id="keyimage" alt="logo"></img>
        </div>
        <div id="header_links">
          <Link to={process.env.PUBLIC_URL + '/login'} id="login">Login</Link>
          <Link to={process.env.PUBLIC_URL + '/signup'} id="signup">Sign Up</Link>
          <Link to={process.env.PUBLIC_URL + '/about'} id="about">About</Link>
        </div>
      </div>
    </>

  )
}

export default Header

