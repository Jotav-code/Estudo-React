import React from 'react';

const Produto = ({ Produto }) => {
  return (
    <div>
      <h2>{Produto.nome}</h2>
      <p style={{ color: 'green' }}>{Produto.preco}</p>
    </div>
  );
};

export default Produto;
