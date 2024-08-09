import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="73571144319-0l3hicm8m8q39dhdec8c2thfq3cqb1t7.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;

  </React.StrictMode>
);


