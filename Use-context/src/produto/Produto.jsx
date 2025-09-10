import React from 'react';
import GlobalContext from '../use-context/UseContext.jsx';
import { GlobalContext2 } from '../use-context/GlobalContext.jsx';
const Produto = () => {
  const Global = React.useContext(GlobalContext2);
  return (
    <>
      {Global.nome}
      <button onClick={() => Global.HandeleClick()}>
        Adicionar {Global.contar}
      </button>
    </>
  );
};

export default Produto;
