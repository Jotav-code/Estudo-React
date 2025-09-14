import React from 'react';
import Input from './form/Input';
import useForm from './use-form/UseForm';

const App = () => {
  const nome = useForm('');
  const mensagem = useForm(false);

  const cep = useForm('cep');
  const email = useForm('email');
  console.log(cep);
  console.log(cep.onBlur);

  function verificar(event) {
    event.preventDefault();
    if (cep.onValidate()) {
      console.log('eviou');
    } else {
      console.log('nao enviar');
    }
  }

  return (
    <form onSubmit={verificar}>
      <Input type="text" id="nome" label="Nome" {...nome} placeholder="Nome" />
      <Input
        type="number"
        id="cep"
        label="Cep"
        {...cep}
        placeholder="00000-000"
      />
      <Input
        type="email"
        id="email"
        label="Email"
        {...email}
        placeholder="Email"
      />
      <Input
        type="mensagem"
        id="text"
        label="Mensagem"
        {...mensagem}
        placeholder="mensagem"
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
