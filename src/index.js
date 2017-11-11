import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadDevs} from './actions/devActions';

import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();
store.dispatch(loadDevs());

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router> 
  </Provider>,
  document.getElementById('root')
);
