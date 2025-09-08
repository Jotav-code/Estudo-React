import React from 'react';
const set1 = new Set();
const set2 = new Set();

/*Use callBack garante que so vou renderizar minha função uma vez*/
const Usecallback = () => {
  const handel = React.useCallback(() => {
    console.log(set1, 'set 111111');
  }, []);
  function handel2() {
    console.log(set2, 'set22222');
  }

  set1.add(handel);
  set2.add(handel2);

  console.log(set1);
  console.log(set2);
  const [contar, setcontar] = React.useState(0);
  return (
    <div>
      <button onClick={() => setcontar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default Usecallback;
