import React from 'react';
import CustomHook from './Custom-hook/CustomHook';
const App = () => {
  const [produto, setProduto] = CustomHook('produto', '');

  function handeleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <>
      {produto && <h1>Produto fav: {produto}</h1>}
      <button onClick={handeleClick}>notebook</button>
      <button onClick={handeleClick}>celular</button>
    </>
  );
};

export default App;
