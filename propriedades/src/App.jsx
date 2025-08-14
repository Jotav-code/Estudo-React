import React from 'react';
import Form from './Form/Form';

const Titulo = (pronps) => {
  return (
    <h1 style={{ color: pronps.cor }}>
      {pronps.texto}
      {pronps.children}
    </h1>
  );
};

const Pot = (pronps) => {
  return <h1>{pronps.children}</h1>;
};

const App = () => {
  return (
    <>
      {/* <Titulo cor="blue" texto="meu titulo" />
      <Titulo cor="red">Isso é um children</Titulo>
      <Pot>
        children
        <p>Podemos criar elementos dentro do children</p>
      </Pot> */}

      <Form />
    </>
  );
};

export default App;
