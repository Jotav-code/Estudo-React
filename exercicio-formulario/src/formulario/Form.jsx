import React from 'react';

const camposFied = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const Form = () => {
  // const [form, setForm] = React.useState({
  //   nome: '',
  //   email: '',
  //   senha: '',
  //   cep: '',
  //   rua: '',
  //   numero: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  // });

  /*versao 2*/

  const [form, setForm] = React.useState(
    camposFied.reduce((acc, form) => {
      console.log(acc);
      return {
        ...acc,
        [form.id]: '',
      };
    }, {}),
  );

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((Response) => setResponse(Response));
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      {camposFied.map(({ id, label, type }) => {
        return (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              onChange={handleChange}
              value={form[id]}
            />
          </div>
        );
      })}
      <button>Enviar</button>
      {loading && <span>carregando...</span>}
      {response && response.ok && <p>enviado com sucesso{response.status}</p>}
    </form>
  );
};

export default Form;
