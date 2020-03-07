import React from 'react'

const Header = () => {
  return (
    <>
    <div className="site_header">
      <p className="site_title">cryptx</p>
      <div id="header_links">
          <a href="login.html" id="login">Login</a>
          <a href="signup.html" id="signup">Sign up</a>
          <a href="about.html" id="about">About</a>
      </div>
    </div>
    <div id="header_margin"></div>
    </>

  )
}

export default Header

