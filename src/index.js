import React from 'react';
import ReactDOM from 'react-dom';
import Memorygame from './app';
import './assets/scss/index.scss'; // global css

ReactDOM.render(
  <React.StrictMode>
    <Memorygame />
  </React.StrictMode>,
  document.getElementById('root')
);
