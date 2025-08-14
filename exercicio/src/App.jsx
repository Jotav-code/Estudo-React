import React from 'react';

const App = () => {
  const joao = {
    cliente: 'joão',
    idade: 20,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'carro', preco: 'R$ 10000' },
    ],
    ativa: true,
  };
  const maria = {
    cliente: 'maria',
    idade: 20,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'carro', preco: 'R$ 5000' },
    ],
    ativa: false,
  };
  const ativo = {
    color: 'green',
  };
  const inativo = {
    color: 'red',
  };

  function somar(dados) {
    const compras = dados.compras;
    let total = 0;
    compras.forEach((item) => {
      total += Number(item.preco.replace('R$ ', ''));
    });
    return total;
  }

  const dados = maria;
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={dados.ativa ? ativo : inativo}>
          {dados.ativa ? 'Ativa' : 'inativa'}
        </span>
      </p>
      <p>Total gasto: R${somar(dados)}</p>
      {somar(dados) > 10000 && <p> Voce esta gastando muito </p>}
    </>
  );
};

export default App;
