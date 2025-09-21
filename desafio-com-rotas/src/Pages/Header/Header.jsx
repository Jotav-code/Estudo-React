import React from 'react';
import { NavLink, Route, Routes, Link } from 'react-router-dom';
import styled from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styled.buttons}>
        <Link className={styled.button} to="/">
          Protudo
        </Link>
        <Link className={styled.button} to="contato">
          Contato
        </Link>
      </div>
    </header>
  );
};

export default Header;
