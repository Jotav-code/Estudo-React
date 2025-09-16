import React from 'react';
import './App.css';

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && (
        <div className="leftAnimation">
          <p>Notebook</p>
          <p>$50000</p>
        </div>
      )}
    </div>
  );
};

export default App;
