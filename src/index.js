import React from 'react';
import {BrowserRouter, Router, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import ReactDOM from 'react-dom';
import  './normalize.css';
import link from './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// using ES6 modules



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
