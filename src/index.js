import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
/* import VineListAll from './components/VineListAll'; */
import VineJokeSearch from './components/VineJokeSearch';
import VineJoke from './components/VineJoke';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <h1 className='spacer'>Tim Vine Jokes</h1>
    <article className='spacer'> <VineJoke /></article>
    <article> <VineJokeSearch /></article>
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
