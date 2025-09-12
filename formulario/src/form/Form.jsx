import React from 'react';

const Form = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

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
    </form>
  );
};

export default Form;
