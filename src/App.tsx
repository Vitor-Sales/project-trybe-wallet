import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import GlobalStyle from './styles';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <Wallet /> } />
      </Routes>
    </>
  );
}

export default App;
