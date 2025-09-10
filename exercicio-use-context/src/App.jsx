import React from 'react';
import { GlobalStorage } from './use-context/UseContext.jsx';
import Produto from './produto/Produto';

const App = () => {
  return (
    <GlobalStorage>
      <h1>oi</h1>
      <Produto/>
    </GlobalStorage>
  );
};

export default App;
