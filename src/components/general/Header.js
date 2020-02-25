import React from 'react'

const Header = () => {
  return (
    <>
    <div className="site_header">
      <p className="site_title">strngcrypt</p>
      <div id="header_links">
          <a href="#" id="login">Login</a>
          <a href="#" id="signup">Sign up</a>
          <a href="#" id="about">About</a>
      </div>
    </div>
    <div id="header_margin"></div>
    </>

  )
}

export default Header

