import React from 'react';

function Header() {
  return (
    <header>
      <img src="" alt="" />

      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Button() {
  return (
    <div>
      <button>click</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Button />
      <h1>Hello world</h1>
      <h2>Vou ser o melhor fullstack</h2>
    </div>
  );
}

export default App;
