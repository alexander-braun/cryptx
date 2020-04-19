import React, { Fragment, useEffect } from 'react'
import EncryptionArea from './general/EncryptionArea'
import Hero from './hero';
import Header from './header/Header'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './footer/Footer'
import Signup from './signup'
import Login from './login'
import store from '../store'
import { Provider } from 'react-redux'
import { loadUser } from '../actions/authenticate'
import { loadPresets } from '../actions/presets'
import setAuthToken from '../utils/setAuthToken'
import About from './about'
import Profile from './userprofile'
import PrivateRoute from './routing/PrivateRoute'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(loadPresets())
  }, [])

  return (
    <Provider store={store}>
      <Router basename="/">
        <Header />
        <Switch>
          <Route exact path={`/`} render={ () => 
            <Fragment>
              <Hero />
              <EncryptionArea />
            </Fragment>
          } />
          <Route exact path={`/signup`} component={Signup} />
          <Route exact path={`/login`} component={Login} />
          <Route exact path={`/about`} component={About} />
          <PrivateRoute exact path={`/Profile`} component={Profile} />
        </Switch>

        <Footer />
      </Router>
    </Provider>
  )
}  

export default App
