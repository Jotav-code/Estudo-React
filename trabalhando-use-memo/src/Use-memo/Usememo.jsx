import React from 'react';

const Usememo = () => {
  /*Quando temos operações custosas em js, que tenha uma complexidade de tempo alta, podemos usar o hook memo para que ele salve essa operação na memória, e assim ele vai executar o algoritmo apenas uma vez*/
  const [contar, setContar] = React.useState(0);

  function HandeleClick() {
    setContar(contar + 1);
  }
  function forLoop() {
    let c;
    for (let i = 0; i < 100000000; i++) {
      c = i + i / i;
    }
    return 'abacate';
  }
  // const t1 = performance.now();
  // const valor = forLoop();
  // console.log(performance.now() - t1);

  const t2 = performance.now();
  const loopComPerformace = React.useMemo(() => forLoop(), []);
  console.log(loopComPerformace);
  console.log('Tempo 2 ' + (performance.now() - t2));
  return (
    <div>
      <button onClick={HandeleClick}>{contar}</button>
    </div>
  );
};

export default Usememo;
