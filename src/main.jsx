import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from 'react-router-dom';

import './index.css'

import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx';
import Vitrine from './pages/UsuarioComum/Vitrine/index.jsx';
import Home from './pages/UsuarioComum/Home/index.jsx';
import Form from './components/form/form.jsx';
import Login from './pages/UsuarioComum/login/login';
import Sobre from './pages/UsuarioComum/Sobre/sobre.jsx';
import CadastroUsuario from '../src/pages/UsuarioComum/SignUpUser/SignUpUser.jsx';
import CadastroParceiro from '../src/pages/Parceiro/SignUpPartner/SignUpPartner.jsx';
import EsqueciSenha from '../src/pages/UsuarioComum/forgotPassword/forgotPassword.jsx';
import AlterarSenha from '../src/pages/UsuarioComum/changePassword/changePassword.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/sobre' Component={Sobre} />
        <Route path='/areaParceiro' Component={AreaParceiro} />
        <Route path='/login' Component={Login} />
        <Route path='/cadastroUsuario' Component={CadastroUsuario} />
        <Route path='/cadastroParceiro' Component={CadastroParceiro} />

        <Route path='/vitrine' Component={Vitrine} />
        <Route path='/esqueciSenha' Component={EsqueciSenha}/>
        <Route path='/alterarSenha' Component={AlterarSenha}/>

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
