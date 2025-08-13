import React from 'react';

const App = () => {
  const style = {
    color: 'red',
    fontSize: '5rem',
    textTransform: 'uppercase',
  };
  const nome = 'joao';

  const ativo = true;
  return (
    <>
      <h1 className="nome" style={style}>
        {nome}
      </h1>

      <p style={style}>
        {new Date().getHours() + ' : ' + new Date().getMinutes()}
      </p>

      <span style={style}>
        {ativo ? 'Classe ativada' : 'classe desativada'}
      </span>
    </>
  );
};

export default App;
