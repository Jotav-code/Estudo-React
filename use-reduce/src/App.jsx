import React from 'react';

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error();
  }
}

function recucer2(state, action) {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.content];
    case 'remover':
      return state.filter((item) => item !== action.content);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);
  const [state2, dispatch2] = React.useReducer(recucer2, ['melancia', 'maça']);

  function aumentar() {
    setContar(contar + 1);
  }

  function reduzir() {
    setContar(contar - 1);
  }
  /*sem reducer*/
  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch2({ type: 'remover', content: 'uva' })}>
          banana
        </button>
        <button
          onClick={() => dispatch2({ type: 'adicionar', content: 'uva' })}
        >
          uva
        </button>
        <p>{state2}</p>
      </div>
    </div>
  );
};

export default App;
