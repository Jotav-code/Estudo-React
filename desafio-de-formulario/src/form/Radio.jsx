import React from 'react';

const Radio = ({ options, value, setValue }) => {
  function handeleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      {options.map((radio) => {
        return (
          <label key={radio}>
            <input
              type="radio"
              onChange={handeleChange}
              value={radio}
              checked={value === radio}
            />
            {radio}
          </label>
        );
      })}
    </>
  );
};

export default Radio;
