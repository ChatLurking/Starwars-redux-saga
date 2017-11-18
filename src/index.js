import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from './store';

const initState = fromJS({});
const store = configureStore(initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
