import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../Hook/useFetch';
import styles from './Produto.module.css';
import Head from '../../Head/Head';
import './../../../../src/App.css';

const Produto = () => {
  const location = useParams();
  const { requere, dados, loading } = useFetch();

  useEffect(() => {
    async function req() {
      const { response, json } = requere(
        `https://ranekapi.origamid.dev/json/api/produto/${location.id}`,
      );
    }
    req();
  }, [requere]);
  console.log(dados);
  console.log(location);
  if (loading) return <div className="loading"></div>;
  if (dados === null) return null;
  return (
    <section className={styles.section}>
      <Head titulo={`${location.id}`} />
      <div className="imagens">
        {dados &&
          dados.fotos.map((foto) => {
            return <img key={foto.src} src={foto.src} alt={foto.titulo} />;
          })}
      </div>
      <div className="content">
        <h1>{dados.nome}</h1>
        <p>{dados.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
