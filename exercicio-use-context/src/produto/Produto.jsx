import React from 'react';
import { GlobalContext } from '../use-context/UseContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global.dados);

  return (
    <>
      <h1>Produto</h1>
      <h2>
        {global.dados &&
          global.dados.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
      </h2>
    </>
  );
};

export default Produto;
