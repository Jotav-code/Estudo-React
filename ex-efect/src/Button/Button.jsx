import React from 'react';

const Button = ({ funcao, nome }) => {
  return (
    <>
      <button onClick={funcao}>{nome}</button>
    </>
  );
};

export default Button;
