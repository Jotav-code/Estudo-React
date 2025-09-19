import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

/*
* Para usar o router, precisamos instalar um plugin
* npm install react-router-dom
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
