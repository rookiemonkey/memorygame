import React from 'react';
import ReactDOM from 'react-dom';
import ReactHowler from 'react-howler'
import Memorygame from './app';
import './assets/scss/index.scss'; // global css

ReactDOM.render(
  <React.StrictMode>
    <ReactHowler
      src={require('./assets/audios/background.mp3')}
      playing={true}
      loop={true}
    />
    <Memorygame />
  </React.StrictMode>,
  document.getElementById('root')
);
