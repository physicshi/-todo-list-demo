import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore,compose} from 'redux'
// import rootReducers from './reducers/rootReducers';
// import { rapperEnhancer } from 'rap/runtime/reduxLib';
// import { Provider } from 'react-redux';

// require("./rapper/overrideFetch")

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store=createStore(rootReducers,composeEnhancers(
//   rapperEnhancer()
// ))

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
