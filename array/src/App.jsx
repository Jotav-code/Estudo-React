import React from 'react';
function App() {
  //diferenças de arrays

  const array1 = ['react ', 'app ', 30];

  const array2 = [<li>Joao</li>, <li>vitor</li>];

  const array3 = [<li key="e1">Joao</li>, <li key="e2">vitor</li>];

  const filmes = ['batma', 'superman', 'homem aranha'];
  return (
    <>
      <h1>{array1}</h1>
      <h1>{array2}</h1>
      <h2>{array3}</h2>
      /*Forma de consumir um arry, sempre usar a key*/
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
