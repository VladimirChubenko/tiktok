import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SiteState } from './context/SiteState';

ReactDOM.render(
  <BrowserRouter>
    <SiteState>
      <App />
    </SiteState>
  </BrowserRouter>,
  document.getElementById('root')
)