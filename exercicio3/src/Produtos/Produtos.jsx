import React from 'react';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];
const estilo = {
  border: 'solid 2px black',
  borderRadius: '20px',
  margin: '20px',
  padding: '20px 40px',
};

function RenderizarProdutos(produtos) {
  return (
    <>
      {produtos.map(({ nome, propriedades }) => {
        return (
          <div style={estilo} key={nome}>
            <h4>{nome}</h4>
            {propriedades.map((propriedade) => {
              return <div key={propriedade}>{propriedade}</div>;
            })}
          </div>
        );
      })}
    </>
  );
}

const Produtos = () => {
  const cor = {
    color: 'green',
  };

  return (
    <>
      <h1 style={cor}>Produtos</h1>
      {RenderizarProdutos(produtos)}
    </>
  );
};

export default Produtos;
