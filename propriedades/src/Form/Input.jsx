import React from 'react';

const Input = ({ id, nome, ...promps }) => {
  return (
    <>
      <label htmlFor={id}>
        {nome}
        <input type="text" id={id} {...promps} />
      </label>
    </>
  );
};

export default Input;
