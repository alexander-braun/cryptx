import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import * as serviceWorker from './serviceWorker';
import BlockElementsCollector from './components/general/BlockElementsCollector'

ReactDOM.render(
        <BlockElementsCollector />
    , 
    document.getElementById('root'));

serviceWorker.unregister();
