import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*
 *Instalando bootStrap npm install bootstrap@5.3.8
 *Agora vamos importar as pastas importantes
 */

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/*
 * quando instalamos o react-bootstrap
 * Não precisamos mais do bundle.js
 */

/*
 *Só que também existe o booststrap react, que é uma biblioteca de compententes feita em react  com bootstrap
 * npm install react-bootstrap bootstrap
 */

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
