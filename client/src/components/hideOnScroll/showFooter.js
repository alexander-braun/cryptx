import { useState, useEffect } from "react";

const ShowFooter = () => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    //checkscroll
    const top = window.pageYOffset || document.documentElement.scrollTop
    setShow(window.innerHeight - 80 > top)
  }

  useEffect(() => {
    handleScroll()
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return show
}

export default ShowFooter
