import React from 'react';
import ReactDOM from 'react-dom/client';
// HashRouter is used for gh-pages
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
