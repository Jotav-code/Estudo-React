import React from 'react'

const Details = ({details}) => {
  return (
    <div>
      <h1>{details.nome}</h1>
      <p>{details.descricao}</p>
      <p>R$ {details.preco}</p>
      <img src={details.fotos[0].src} alt={details.fotos[0].titulo} />
    </div>
  )
}

export default Details
