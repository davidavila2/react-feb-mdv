import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { counterReducer } from './Counter';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
