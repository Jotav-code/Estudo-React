import React from 'react';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Sobre from './Sobre/Sobre';
import P404 from './P404/P404';
import Login from './Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
