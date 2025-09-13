import React from 'react';

const Selected = ({ option, value, setValue }) => {
  return (
    <>
      <select value={value} onChange={({ target }) => setValue(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        {option.map((op) => {
          return (
            <option value={op} key={op}>
              {op}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Selected;
