import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Any component wrapped in Provider will have access to redux store
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Compose combine diff middlewares into 1 - to pass in all middleware as 1 argument in createStore
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import App from './App';

// enable Redux DevTools Extension
// to view store state and each action dispatched
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Pass reducer into createStore, assigning return value to store
// configure thunk by passing in thunk as part of the composeEnhancer
// STORE = where you store data globally
// REDUCER = responsible for taking in action & deciding what to update about current store
// and return new version of store
// ACTIONS will be dispatched to our reducer
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  // any component in App can now set up routes and links
  // pass store into Provider as a prop - allow access when we connect our components
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);