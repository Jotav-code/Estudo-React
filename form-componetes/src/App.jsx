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
  return (
    <form>
      <Input
        type="text"
        label="Nome"
        id="nome"
        value={nome}
        setValue={setNome}
      />
      <Input
        type="email"
        label="Email"
        id="email"
        value={email}
        setValue={setEmail}
      />

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
    </form>
  );
};

export default App;
