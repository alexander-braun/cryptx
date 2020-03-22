import React from 'react';
import BlockElementCollector from './general/BlockElementsCollector';
import Hero from './hero';
import Header from './general/Header';

function App () {
    return (
    <>
      <Header />
      <Hero />
      <BlockElementCollector />
    </>
  )
}  


export default App;
