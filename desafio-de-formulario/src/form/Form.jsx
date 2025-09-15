import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];
let numeroDePerguntas = perguntas.length;
const Form = () => {
  const [quantidadeDeAcertos, setQuantidadeDeAcertos] = React.useState(0);
  const [contador, setContador] = React.useState(0);
  const [resposta, setResposta] = React.useState(null);

  function handeleSubmit(event) {
    console.log(contador);

    event.preventDefault();

    if (contador < numeroDePerguntas) {
      setContador(contador + 1);
      if (resposta === perguntas[contador].resposta) {
        setQuantidadeDeAcertos(quantidadeDeAcertos + 1);
      }
    } else {
      setContador(contador + 1);
    }
    console.log('quantidade de acertos', quantidadeDeAcertos);
  }
  if (contador < numeroDePerguntas)
    return (
      <fieldset>
        <legend>{perguntas[contador].pergunta}</legend>
        <form onSubmit={handeleSubmit}>
          <Radio
            options={perguntas[contador].options}
            value={resposta}
            setValue={setResposta}
          />
          <button>Enviar</button>
        </form>
      </fieldset>
    );
  else {
    return (
      <p>
        Você acertou: {quantidadeDeAcertos} / de : {numeroDePerguntas}
      </p>
    );
  }
};

export default Form;
