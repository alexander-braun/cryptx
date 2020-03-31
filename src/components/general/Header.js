import React from 'react'
import logo from './img/key.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div id="header_margin"></div>
      <div className="site_header">
        <div className='site_title'>
           <Link to={'/'}><p>cryptx</p></Link><img src={logo} id="keyimage" alt="logo"></img>
        </div>
        <div id="header_links">
          <Link to={'/login'} id="login">Login</Link>
          <Link to={'/signup'} id="signup">Sign Up</Link>
          <Link to={'/about'} id="about">About</Link>
        </div>
      </div>
    </>

  )
}

export default Header

