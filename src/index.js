import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar.js';
import Body from './components/Home/Body.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Body />
  </div>
);
