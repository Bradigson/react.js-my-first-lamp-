import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

function Aumentar(){
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
}
setInterval(Aumentar, 1000)

