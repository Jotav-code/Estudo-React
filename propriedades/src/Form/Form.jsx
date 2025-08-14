import React from 'react';
import Input from './input';
import Button from './Button';

const Form = () => {
  return (
    <>
      <form action="" method="get">
        <Input nome="Nome" id="Nome" placeholder="nome" requered />
        <Input nome="Senha" id="senha" placeholder="Senha" type="password" />
        <Button />
      </form>
    </>
  );
};

export default Form;
