import React from 'react';

const App = () => {
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  let listaFiltrada = produtos.map((protudo) => {
    if (Number(protudo.preco.replace('R$ ', '')) > 1500) {
      return (
        <div key={protudo.nome}>
          <h1>{protudo.nome}</h1>
          <p>preço: {protudo.preco}</p>
          <ul>
            {protudo.cores.map((cor) => {
              return (
                <li key={cor} style={{ background: cor, color: 'white' }}>
                  {cor}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  });

  return (
    <>
      <section>{listaFiltrada}</section>
    </>
  );
};

export default App;
