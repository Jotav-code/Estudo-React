import React from 'react';

const Button = ({ nome, Url }) => {
  const [details, setDetails] = React.useState(null);

  const url = Url;

  async function handleClick() {
    const response = await fetch(url);
    const json = await response.json();
    return setDetails(json);
  }

  function exibirDetails() {
    const detailss = details;

    return (
      <>
        <h1>{detailss.nome}</h1>
        <p>{detailss.descricao}</p>
        <p>R$ {detailss.preco}</p>
        <img src={detailss.fotos[0].src} alt={detailss.fotos[0].titulo} />
      </>
    );
  }

  return (
    <>
      <button onClick={handleClick}>{nome}</button>
      {details && exibirDetails()}
    </>
  );
};

export default Button;
