import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from 'react-router-dom';

import './index.css'

import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx';
import Vitrine from './pages/UsuarioComum/Vitrine/index.jsx';
import Home from './pages/UsuarioComum/Home/index.jsx';
import Form from './components/form/form.jsx';
import Login from './pages/UsuarioComum/login/login.jsx';
import Sobre from './pages/UsuarioComum/Sobre/sobre.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/vitrine' Component={Vitrine} />
        <Route path='/areaParceiro' Component={AreaParceiro} />
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/cadastroParceiro' Component={Form} />
        <Route path='/sobre' Component={Sobre} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Chamando as rotas que foram definidas */}
    <App></App>

    {/* Caso você querira chamar só um componente é só fazer 
    como o exemplo abaixo e comentar todos os codigos referentes as rotas */}
    {/* <AreaParceiro></AreaParceiro> */}

    </React.StrictMode>,
)
