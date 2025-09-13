import React from 'react';

const Input = ({ type, label, id, value, setValue, ...promps }) => {
  function handeleChange({ target }) {
    setValue(target.value);
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={handeleChange}
        {...promps}
      />
    </>
  );
};

export default Input;
