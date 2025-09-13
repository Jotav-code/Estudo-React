import React from 'react';

const Input = ({ type, label, id, value, setValue, ...promps }) => {

  

  function handeleBlur() {

  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange
        {...promps}
        
      />
    </>
  );
};

export default Input;
