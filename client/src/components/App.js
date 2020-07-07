import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Redux store
import store from '../store';

//Components
import Main from './main';
import Header from './header/Header';
import Footer from './footer/Footer';
import Signup from './login_signup/signup';
import Login from './login_signup/login';
import About from './about';
import Profile from './userprofile';
import PrivateRoute from './routing/PrivateRoute';

//Actions
import { loadUser } from '../actions/authenticate';
import { loadPresets } from '../actions/presets';
import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadPresets());
  }, []);

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Header />
        <Switch>
          <Route exact path={`/`} render={() => <Main />} />
          <Route exact path={`/signup`} component={Signup} />
          <Route exact path={`/login`} component={Login} />
          <Route exact path={`/about`} component={About} />
          <PrivateRoute exact path={`/Profile`} component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
