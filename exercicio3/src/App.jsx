import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Produtos from './Produtos/Produtos';

function Rederizar() {
  const caminho = window.location.href;

  if (caminho == 'http://localhost:5173/') {
    return <Home />;
  } else {
    return <Produtos />;
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Rederizar />
    </>
  );
};

export default App;
