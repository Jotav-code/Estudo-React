import React from 'react';

const Comentario = () => {
  const [comentario, setComentario] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputFocus = React.useRef('');

  function handelCLic() {
    setComentario((comentarios) => [...comentarios, input]);
    inputFocus.current.focus();
  }

  return (
    <div style={{ marginBottom: '100px' }}>
      <ul>
        {comentario &&
          comentario.map((valor) => {
            return <li key={valor}>{valor}</li>;
          })}
      </ul>
      <input
        ref={inputFocus}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handelCLic}>Enviar</button>
    </div>
  );
};

export default Comentario;
