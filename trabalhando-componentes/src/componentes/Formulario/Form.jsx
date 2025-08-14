import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <>
      <form action="" method="get">
        <label htmlFor="">
          Name and e-mail
          <Input />
        </label>
        <Button />
      </form>
    </>
  );
};

export default Form;
