import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', gap: '20px', textDecoration: 'none' }}>
      <a href="http://localhost:5173/">Home</a>
      <a href="http://localhost:5173/produtos/">Produtos</a>
    </header>
  );
};

export default Header;
