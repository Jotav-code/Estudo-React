import React from 'react';
import Input from './form/Input';
import Selected from './form/selected';
import Radio from './form/Radio';
import Checkbox from './form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagens, setLinguagens] = React.useState(['PHP']);
  const [erro, setErro] = React.useState('');

  function validar(valor) {
    if (valor.length === 0) {
      setErro('Digite seu cep');
      console.log(false);
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(valor)) {
      setErro('Digite um cep válido');
      console.log(false);
      return false;
    } else {
      setErro(null);
      console.log(true);
      return true;
    }
  }

  function handeleBlur({ target }) {
    validar(target.value);
  }
  function handeleChange({ target }) {
    if (erro) {
      validar(target.value);
    }
    setNome(target.value);
  }
  function verificar(event) {
    event.preventDefault();
    if (validar(nome)) {
      console.log('eviou');
    } else {
      console.log('nao enviar');
    }
  }

  return (
    <form onSubmit={verificar}>
      <Input
        type="number"
        id="cep"
        label="Cep"
        value={nome}
        placeholder="00000-000"
        setValue={setNome}
        onBlur={handeleBlur}
        onChange={handeleChange}
      />
      {erro && <p>{erro}</p>}

      <Selected
        option={['tablet', 'computador', 'celular']}
        setValue={setProduto}
        value={produto}
      />

      <Radio option={['vermelho', 'verde']} value={cor} setValue={setCor} />

      <Checkbox
        option={['javascript', 'PHP', 'phyton']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
