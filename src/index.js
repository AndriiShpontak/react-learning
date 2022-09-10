import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World!';

const elem = (
  <div>
    <h2 className='text'>Text: {text}</h2>
    <input type="text" />
    <button tabIndex="0">Click</button>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);