import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import * as serviceWorker from './serviceWorker'
import App from './components/App'
import { BrowserRouter as Router} from 'react-router-dom';

if (process.env.NODE_ENV !== 'production') {
    const {whyDidYouUpdate} = require('why-did-you-update')
    whyDidYouUpdate(React)
}

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, document.getElementById('root'))

serviceWorker.unregister()
