import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Alpha from '../src/components/affine/Alpha'

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/fuck" component={Alpha} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
