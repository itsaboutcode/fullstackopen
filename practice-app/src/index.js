import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let counter = 1

ReactDOM.render(
  <React.StrictMode>
    <App counter={counter} />
  </React.StrictMode>,
  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
