import React from 'react';

const Carrinho = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const NotificacaoRef = React.useRef();

  function handeleClick() {
    setCarrinho(carrinho + 1);

    setNotificacao('adicionado');
    clearTimeout(NotificacaoRef.current);
    NotificacaoRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }

  return (
    <div>
      {notificacao && <p>{notificacao}</p>}
      <button onClick={handeleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default Carrinho;
