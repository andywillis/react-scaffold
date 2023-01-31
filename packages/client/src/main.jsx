import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollTop from './components/ScrollTop';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <ScrollTop>
          <App />
        </ScrollTop>
      </Router>
    </RecoilRoot>
  </StrictMode>
);
