import React from 'react';
import { NavLink, Route, Routes, Link } from 'react-router-dom';
import useFetch from '../../Hook/useFetch';
import styled from './Home.module.css';
import Produto from './Produtos/Produto';
import Head from '../Head/Head';
import './../../App.css';

const Home = () => {
  const { dados, requere, loading, error } = useFetch();
  const [consulta, setConsulta] = React.useState(null);
  console.log(dados);

  function handeleClick(event) {}

  React.useEffect(() => {
    async function req() {
      const { response, json } = await requere(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
    }
    req();
  }, [requere]);
  return (
    <section className={styled.section}>
      <Head titulo="Home * Digital" />
      {loading && <div className="loading"></div>}
      <div className="produtos">
        <div className={styled.itens}>
          {dados &&
            dados.map((produto) => {
              return (
                <NavLink
                  onClick={handeleClick}
                  to={'produto/' + produto.id}
                  key={produto.id}
                >
                  <img
                    className={styled.img_pruduto_home}
                    src={produto.fotos[0].src}
                    alt={produto.nome}
                  />
                  <h2>{produto.nome}</h2>
                </NavLink>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Home;
