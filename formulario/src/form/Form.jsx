import React from 'react';
import { createNodeImportMeta } from 'vite/module-runner';

const Form = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textArea, setTextArea] = React.useState('');
  const [selectd, setSelectd] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  function handeleChange(event) {
    if (event.target.checked) {
      setCores([...cores, event.target.value]);
      console.log('event', event.target.value);
    } else {
      console.log('valor', event.target.value);
      setCores(cores.filter((cor) => cor !== event.target.value));
    }
  }

  /*Segunda forma de fazer isso*/

  // const [form, setForm] = React.useState({
  //   nome: '',
  //   email: '',
  // });

  // function handeleChange({ target }) {
  //   const { id, value } = target;
  //   console.log(id, value);
  //   setForm({ ...form, [id]: value });
  // }

  function handeleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form onSubmit={handeleSubmit}>
      <label htmlFor="nome">nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
      {nome}
      /*versao 2*/
      {/* <label htmlFor="nomee">Nome 2</label>
      <input type="text" id="nome" value={form.nome} onChange={handeleChange} />
      <label htmlFor="emaill">Email 2</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handeleChange}
      /> */}
      <label htmlFor="textArea">Texto</label>
      <textarea
        name="textArea"
        id="textArea"
        onChange={({ target }) => setTextArea(target.value)}
        value={textArea}
        rows={5}
      >
        {' '}
      </textarea>
      <select
        name="selectd"
        id="selectd"
        onChange={({ target }) => setSelectd(target.value)}
        value={selectd}
      >
        <option value=""></option>
        <option value="tablet">tablet</option>
        <option value="smartphone">smartphone</option>
        <option value="notebook">notebook</option>
      </select>
      {selectd}
      <h1>{produto}</h1>
      <label>
        {' '}
        Tablet{' '}
        <input
          type="radio"
          checked={produto === 'tablet'}
          id="tablet"
          value="tablet"
          onChange={({ target }) => setProduto(target.value)}
        />
      </label>
      <label>
        Smartphone
        <input
          type="radio"
          checked={produto === 'smartphone'}
          id="smartphone"
          value="smartphone"
          onChange={({ target }) => setProduto(target.value)}
        />
      </label>
      {checked && <p>aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={checked}
          onChange={({ target }) => setChecked(target.checked)}
        />{' '}
        Aceito os termos e condições
      </label>
      <label htmlFor="">
        {' '}
        <input
          checked={cores.includes('azul')}
          type="checkbox"
          onChange={handeleChange}
          value="azul"
        />
        Azul
      </label>
      <label htmlFor="">
        <input
          checked={cores.includes('vermelho')}
          type="checkbox"
          onChange={handeleChange}
          value="vermelho"
        />
        Vermelho
      </label>
    </form>
  );
};

export default Form;
