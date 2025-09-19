import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Isso é a home</h1>
      <nav>
        <Link to="produto/notebook">Notebook</Link>
        <Link to="produto/tablet">Tablet</Link>
      </nav>
    </div>
  );
};

export default Home;
