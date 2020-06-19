import React from 'react'
import showFooter from '../hideOnScroll/showFooter'
import GitHubIcon from '@material-ui/icons/GitHub'

const Footer = () => {
  
  return !showFooter() ? (
        <div className="site_footer">
            <div id="footer_links">
              <a href="https://github.com/alexander-braun/cryptx" target="blank" style={{color: 'white'}} id="github_icon">
                <GitHubIcon />
              </a>
              &copy; 2020 Alexander Braun
            </div>
        </div>
  ) : null
}

export default Footer

