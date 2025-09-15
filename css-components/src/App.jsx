import React from 'react';
import styled from 'styled-components';

/*
 * Para usar o styled componets
 * Precisamos instalar ele, npm install styled-components
 * além dele, é bom instalar o plugin do vscode, para ele reconhecer o que estamos fazendo
 * Por ultimo e não menos importante, importamos ele no nosso projeto import styled from 'styled-components';
 */
const Titulo = styled.h1`
  font-size: 2rem;
  color: red;
`;
const Paragrafo = styled.p`
  font-size: 0.7rem;
  color: blue;
`;

const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  font-family: 'monospace';
  font-weight: bold;
  font-size: 2rem;
`;
const PrecoColorido = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
  font-family: 'monospace';
  font-weight: bold;
  font-size: 2rem;
`;
const BotaoComprar = styled.button`
  background-color: ${({ ativo }) => (ativo ? 'red' : 'black')};
  padding: 1rem 2rem;
  border: solid 2px red;
  color: white;
  cursor: pointer;
  color: ${({ ativo }) => (ativo ? 'black' : 'red')};
  &:hover {
    background-color: aqua;
  }
`;
const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  function handeleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <Titulo>Isso é o meu titulo</Titulo>
      <Paragrafo>isso é um paragrafo</Paragrafo>
      <Preco cor="red">$2000</Preco>
      <Preco cor="blue">$2000</Preco>
      <PrecoColorido>Math.random() * 360</PrecoColorido>
      <BotaoComprar ativo={ativo} onClick={handeleClick}>
        comprar
      </BotaoComprar>
    </div>
  );
};

export default App;
