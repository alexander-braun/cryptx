import { useState, useEffect } from "react";

const HideElementOnScroll = () => {
  const [hide, setHide] = useState(false)

  const handleScroll = () => {
    //checkscroll
    const top = window.pageYOffset || document.documentElement.scrollTop
    setHide(top >= 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return hide
}

export default HideElementOnScroll
