import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
    const {whyDidYouUpdate} = require('why-did-you-update');
    whyDidYouUpdate(React);
  }

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
