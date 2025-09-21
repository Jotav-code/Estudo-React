import React from 'react';
import Header from './Header';

/*
Vai servir qunado temos um componente muito pesado, Assim podemos colocar ele na memoria, e ele so será renderizado 1 cvez
*/

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <>
      <Header />
      <button onClick={() => setContar(contar + 1)}> contar{contar}</button>
    </>
  );
};

export default App;
