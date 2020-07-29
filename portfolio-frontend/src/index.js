import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Any component wrapped in Provider will have access to redux store
import { Provider } from 'react-redux';
// React-router to link to specific URLs then show/hide various components
import { BrowserRouter as Router } from 'react-router-dom';
// Compose combine diff middlewares into 1 - to pass in all middleware as 1 argument in createStore
import { createStore, applyMiddleware, compose } from 'redux';
// Thunk to incorporate async code with out Redux actions
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import App from './App';

// Enable Redux DevTools Extension to view store state + each action dispatched
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Pass reducer into createStore, assigning return value to store
// configure thunk by passing in thunk as part of the composeEnhancer
// REDUCER = responsible for taking in action & deciding what to update about current store
// and return new version of store
// ACTIONS will be dispatched to our reducer
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  // Any component in App can now set up routes and links - Router as base for app's routing
  // pass store into Provider as a prop - allow access when we connect our components
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);