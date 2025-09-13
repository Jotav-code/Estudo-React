import React from 'react';
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState(['azul']);
  function handeleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handeleCheckd(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => {
        return (
          <label key={cor}>
            <input
              type="checkbox"
              value={cor}
              onChange={handeleChange}
              checked={handeleCheckd(cor)}
            />
            {cor}
          </label>
        );
      })}
      {/*versao não otimizada*/}
      <label>
        <input
          type="checkbox"
          value="vermelho"
          onChange={handeleChange}
          checked={handeleCheckd('vermelho')}
        />
        vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="azul"
          onChange={handeleChange}
          checked={handeleCheckd('azul')}
        />
        azul
      </label>
    </form>
  );
};

export default App;
