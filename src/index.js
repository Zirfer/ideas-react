import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Loader = lazy(() => import('./sharedComponents/Loader'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>
);
