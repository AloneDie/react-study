import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { globalState } from './global-state';
import './index.scss';
import RouterCard from './Route';

ReactDOM.render(
  <React.StrictMode>
    <Router history={globalState.history as any}>
      <RouterCard />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
