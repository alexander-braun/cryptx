import React from 'react'
import showFooter from '../hideOnScroll/showFooter'

const Footer = () => {
  console.log(showFooter())
  return !showFooter() ? (
        <div className="site_footer">
            <div id="footer_links">
                Footer in Progress
            </div>
        </div>
  ) : null
}

export default Footer

