import React, { Fragment, useEffect } from 'react'
import EncryptionArea from './general/EncryptionArea'
import Hero from './hero';
import Header from './header/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './footer/Footer'
import Signup from './signup'
import Login from './login'
import store from '../store'
import { Provider } from 'react-redux'
import { loadUser } from '../actions/authenticate'
import setAuthToken from '../utils/setAuthToken'
import About from './about'
import Profile from './userprofile'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <h1>HELLO</h1>
  )
}  

export default App;