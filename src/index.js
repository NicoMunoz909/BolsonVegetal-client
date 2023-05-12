import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css'
import Router from './Router';
import { Amplify, API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router />
  // </React.StrictMode>
);

