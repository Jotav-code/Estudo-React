import React from 'react';
import Descricao from './detalhes/Descricao';
import Avaliacao from './detalhes/Avaliacao';
import Comentarios from './detalhes/Comentarios';
import {
  useLocation,
  useParams,
  Link,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  console.log(params);

  const search = new URLSearchParams();
  console.log(search);
  /*
   *Isso vai servir pra quando queremos pegar os parametros da busca
   *Por exemplo jotav.com.br/notebook/?cor=verde&memoria=16
   * ele vai nos retornar um objeto contendo essas informações, depois podemos fazer um fetch
   */
  return (
    <div>
      <h1>Produto: {params.id}</h1>

      <nav>
        <Link to="">Detalhes</Link>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="comentarios">Comentarios</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Descricao />} />
        <Route path="comentarios" element={<Comentarios />} />
        <Route path="avaliacao" element={<Avaliacao />} />
      </Routes>
    </div>
  );
};

export default Produto;
