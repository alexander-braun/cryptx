import React, { Fragment } from 'react'
import BlockElementCollector from './general/BlockElementsCollector'
import Hero from './hero';
import Header from './general/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './general/Footer'
import Signup from './signup'
import Login from './login'

function App () {
  console.log('env', process.env.PUBLIC_URL)
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => 
            <Fragment>
              <Hero />
              <BlockElementCollector />
            </Fragment>
          } />
          <Route exact path={process.env.PUBLIC_URL + '/signup'} render={ () => 
            <Fragment>
              <Signup />
            </Fragment>
          } />
          <Route exact path={process.env.PUBLIC_URL + '/login'} render={ () => 
            <Fragment>
              <Login />
            </Fragment>
          } />
          <Route exact path={process.env.PUBLIC_URL + '/about'} render={ () => 
            <Fragment>
              <h1 style={{color: 'white'}}>ABOUT</h1>
            </Fragment>
          } />
        </Switch>
        <Footer />
    </Router>
  )
}  

export default App;
