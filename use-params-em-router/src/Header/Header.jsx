import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

/*
 * Temos o link, que vai permitir que o
 * usuário navegue pelo site sem recarregar a página
 * Porém, temos um problema, que é que não sabemos qual página está ativa no momento
 * um solução seria usar o window.location, mas temos uma solução já embutida no router
 * usamos então o NavLink, ele vai dizer qual página está ativa no momento, mão podemos
 * esquecer de colocar o 'end' na home, para indicar que ali é o final
 */

const Header = () => {
  /*Exepmlo do que podemos fazer com location*/
  const location = useLocation();

  React.useEffect(() => {
    console.log('mudou de rota');
  }, [location]);
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink to="sobre">sobre</NavLink>
        <NavLink to="login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
