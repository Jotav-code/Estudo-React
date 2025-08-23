import React from 'react';
import Button from './Button/Button';
import Produto from './Produto/Produto';

const App = () => {
  const [detalhes, setDetalhes] = React.useState(() => {
    return localStorage.getItem('detalhes');
  });
  const [produto, setProduto] = React.useState(null);

  function HandelClick(event) {
    const valor = event.target.innerText;
    setDetalhes(valor);
    localStorage.setItem('detalhes', valor);
  }

  React.useEffect(() => {
    if (detalhes) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${detalhes}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return setProduto(json);
        });
    }
  }, [detalhes]);

  return (
    <>
      <h1>Preferencias: {produto && produto.nome} </h1>
      <Button funcao={HandelClick} nome="notebook" />
      <Button funcao={HandelClick} nome="smartphone" />
      <Produto Produto={produto ? produto : ''} />
    </>
  );
};

export default App;
