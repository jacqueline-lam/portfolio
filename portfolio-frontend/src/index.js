import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import * as serviceWorker from './serviceWorker';

import App from './App';
import projectsReducer from './reducers/projectsReducer'
// import { devToolsEnhancer } from 'redux-devtools-extension';

// pass reducer into createStore, assigning return value to store
// configure thunk by passing in thunk as 2nd arg for createStore
const store = createStore(projectsReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
