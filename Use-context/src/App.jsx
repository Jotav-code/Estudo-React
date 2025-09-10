import React from 'react';
import GlobalContext from './use-context/UseContext.jsx';
import Produto from './produto/Produto.jsx';
import { Global } from './use-context/GlobalContext.jsx';

const App = () => {
  return (
    <Global>
      <Produto />
    </Global>
  );
};

export default App;
