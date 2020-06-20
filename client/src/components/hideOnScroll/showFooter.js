import { useState, useEffect } from 'react';

const ShowFooter = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    /*
    //checkscroll
    // deleted hero - deactivated as footer should now be visible all the time
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setShow(window.innerHeight - 80 > top);
    */
  };

  useEffect(() => {
    handleScroll();
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return show;
};

export default ShowFooter;
