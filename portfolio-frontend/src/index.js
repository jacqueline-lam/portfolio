import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
// Any component wrapped in Provider will have access to redux store
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Compose combine diff middlewares into 1 - so we can pass in all middleware as one argument in createStore
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import projectsReducer from './reducers/projectsReducer'

// enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Pass reducer into createStore, assigning return value to store
// configure thunk by passing in thunk as part of the composeEnhancer
// STORE = where you store data globally
// REDUCER = responsible for taking in action and deciding what to update about current store
// and return new version of store
// ACTIONS will be dispatched to our reducer
const store = createStore(
  projectsReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  // any component in App can now set up routes and links
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
