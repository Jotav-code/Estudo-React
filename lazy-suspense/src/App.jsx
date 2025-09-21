import React from 'react';
const Contato = React.lazy(() => import('./contato/Contato'));

/*
 * Vai servir pra quando temos uma biblioteca muito pesada instalada, ai podemos fazer o lazy e o suspense para que a biblioteca seja carregada apenas quando esses elementos forem renderizados
 */
const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>carregando...</div>}>
        <Contato />
      </React.Suspense>
    </div>
  );
};

export default App;
