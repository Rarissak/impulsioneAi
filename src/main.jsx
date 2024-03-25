import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx';
import Vitrine from './pages/UsuarioComum/Vitrine/index.jsx';
import Home from './pages/UsuarioComum/Home/index.jsx';
import Login from './components/login/login.jsx';
import Form from './components/form/form.jsx';

// Configurando o router
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

// Aqui a gente coloca todas as pages que vão ter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "areaParceiro",
    element: <AreaParceiro></AreaParceiro>,
  },
  {
    path: "vitrine",
    elements: <Vitrine></Vitrine>,
  },
  {
    path: "login",
    elements: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}

    {/* <AreaParceiro></AreaParceiro> */}
    { <Form></Form> }
    {/* {<Login></Login>} */}

    </React.StrictMode>,
)
