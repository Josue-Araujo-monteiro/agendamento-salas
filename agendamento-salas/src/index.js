import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { SupabaseProvider } from './contexts/SupabaseContext';

ReactDOM.render(
  <React.StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);