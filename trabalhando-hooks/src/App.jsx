import React from 'react';
import ButtonModal from './Button/ButtonModal';
import FecharModal from './Button/FecharModal';

const App = () => {
  let ativado = true;

  // function handleClick() {
  //   ativado = !ativado;
  //   console.log(ativado);
  // }

  /* há um problema nesta implementação: o ativado não está sendo atualizado, somente os console.log's  */

  /* A solução é usar o useState que é um hook que permite criar um estado em um componente funcional */

  // const [ativadoHook, setAtivadoHook] = React.useState(false);
  // const [dados, setDados] = React.useState({
  //   nome: 'João',
  //   idade: 20,
  // });

  // function handleClick() {
  //   setAtivadoHook(!ativadoHook);
  //   setDados({ ...dados, faculdade: 'Engenharia da Computação' });
  // }

  // const [modal, setModal] = React.useState(false);
  const [contar, setContar] = React.useState(1);
  const [item, setItem] = React.useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItem([...item, 'item ' + (contar + 1)]);
  }

  return (
    <>
      {item.map((items) => {
        return <li key={items}>{items}</li>;
      })}
      <button onClick={handleClick}>{contar}</button>

      {/* <button
        onClick={handleClick}
        disabled={!ativado}
        className={ativado ? 'btn ativado' : 'btn'}
      >
        Click me
      </button> */}
      {/* <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativadoHook ? 'Ativado' : 'Inativo'}
      </button> */}

      {/* <ButtonModal setModal={setModal} />
      <FecharModal modal={modal} setModal={setModal} /> */}
    </>
  );
};

export default App;
