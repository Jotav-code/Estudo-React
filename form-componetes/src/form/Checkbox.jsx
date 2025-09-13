import React from 'react';

const Checkbox = ({ value, setValue, option, ...props }) => {
  function handeleCheckbox({ target }) {
    if (target.checked) {
      setValue((cor) => [...cor, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  function checar(cor) {
    return value.includes(cor);
  }
  return (
    <>
      {option.map((opcao) => {
        return (
          <label key={opcao}>
            {' '}
            <input
              type="checkbox"
              value={opcao}
              onChange={handeleCheckbox}
              checked={checar(opcao)}
            />{' '}
            {opcao}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;
