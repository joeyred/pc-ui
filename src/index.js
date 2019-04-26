// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers
} from 'redux';
import EditReducer from './redux/reducers/edit';
// Components
import App from './App';
// Util
import * as serviceWorker from './serviceWorker';
// Styles
import './index.css';

// TODO - Shopify API
// Replace hardwired API key with a fetch reducer
function filestack(state = {apiKey: 'AA1ZGkqsZT1Ca96rjT6mKz'}, action) {
  switch (action.type) {
    case 'UPDATE_API_KEY': {
      const apiKey = action.apiKey;
      return {apiKey};
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  edit: EditReducer,
  filestack
});

const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
