import React from 'react';

const header = () => {
  const style = {
    display: 'flex',
    listStyle: 'none',
  };
  return (
    <header>
      <h1>LOGO</h1>
      <div>
        <ul style={style}>
          <li>Home</li>
          <li>sobre</li>
          <li>contato</li>
        </ul>
      </div>
    </header>
  );
};

export default header;
