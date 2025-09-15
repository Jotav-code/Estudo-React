import React from 'react';
import Style from './Produto.module.css';

const Produto = () => {
  console.log(Style);
  return (
    <div>
      <h1 className={Style.titulo}>Produtos</h1>
      <p className={Style.preco}>$20000.00</p>
      <button className={Style.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
