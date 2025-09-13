import React from 'react';

const Radio = ({ value, setValue, option }) => {
  return (
    <>
      {option.map((op) => {
        return (
          <label key={op}>
            {op}{' '}
            <input
              type="radio"
              value={op}
              checked={value === op}
              onChange={({ target }) => setValue(target.value)}
            />
          </label>
        );
      })}
    </>
  );
};

export default Radio;
