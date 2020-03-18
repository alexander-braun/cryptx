import React from 'react';
import BlockElementCollector from './general/BlockElementsCollector';
import Hero from './hero';
import Header from './general/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <svg id="seperatorHeader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#4597c7" points="0,100 100,0 100,100" />
      </svg>
      <BlockElementCollector />
    </>
  );
}

export default App;
