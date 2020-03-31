import React, { Fragment } from 'react'
import BlockElementCollector from './general/BlockElementsCollector'
import Hero from './hero';
import Header from './general/Header'
import { BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom'
import Footer from './general/Footer'
import Signup from './signup'
import Login from './login'

function App () {
  return (
    <HashRouter basename="/">
        <Header />
        <Route path={`/signup`} render={ () => 
          <Fragment>
            <Signup />
          </Fragment>
        } />
        <Route path={`/login`} render={ () => 
          <Fragment>
            <Login />
          </Fragment>
        } />
        <Route path={`/about`} render={ () => 
          <Fragment>
            <h1 style={{color: 'white'}}>ABOUT</h1>
          </Fragment>
        } />
        <Route exact path={`/`} render={ () => 
          <Fragment>
            <Hero />
            <BlockElementCollector />
          </Fragment>
        } />
        <Footer />
    </HashRouter>
  )
}  

export default App;
